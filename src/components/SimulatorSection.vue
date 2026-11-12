<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { Trash2, Table2, CheckCircle2, XCircle, RotateCcw, GripVertical } from 'lucide-vue-next'
import { messages, type Msg } from '@/data/messages'

type Zone = 'trash' | 'keep'
const zones: Zone[] = ['trash', 'keep']
const choices = reactive<Record<number, Zone | undefined>>({})
const dragging = ref<number | null>(null)
const over = ref<Zone | null>(null)
const shaking = ref<number | null>(null)
const bursts = ref<{ id: number; zone: Zone }[]>([])
let burstId = 0

const pending = computed(() => messages.filter(m => !choices[m.id]))
const inZone = (z: Zone) => messages.filter(m => choices[m.id] === z)
const isRight = (m: Msg) => (choices[m.id] === 'trash') === m.scam
const done = computed(() => pending.value.length === 0)
const score = computed(() => messages.filter(isRight).length)
const perfect = computed(() => done.value && score.value === messages.length)
const progress = computed(() => ((messages.length - pending.value.length) / messages.length) * 100)

const sparks = Array.from({ length: 14 }, (_, i) => {
  const a = (i / 14) * Math.PI * 2
  return { '--dx': `${Math.cos(a) * 70}px`, '--dy': `${Math.sin(a) * 70}px` }
})

const decide = (id: number, z: Zone) => {
  if (choices[id]) return
  choices[id] = z
  const m = messages.find(x => x.id === id)!
  if (isRight(m)) {
    const b = { id: ++burstId, zone: z }
    bursts.value.push(b)
    setTimeout(() => (bursts.value = bursts.value.filter(x => x !== b)), 800)
  } else {
    shaking.value = z === 'trash' ? 1 : 2
    setTimeout(() => (shaking.value = null), 400)
  }
}
const reset = () => messages.forEach(m => delete choices[m.id])
const onDrop = (z: Zone) => { if (dragging.value) decide(dragging.value, z); dragging.value = null; over.value = null }
</script>

<template>
  <section id="como-jogar">
    <div class="section">
      <div v-reveal class="max-w-2xl">
        <h2 class="title">Como jogar: teste agora, aqui mesmo</h2>
        <p class="lead">Arraste cada cartão para a lixeira ou para a mesa. Em telas de toque, use os botões do cartão.</p>
      </div>

      <div v-reveal class="relative mt-10 overflow-hidden rounded-[2rem] border p-5 backdrop-blur-xl transition-all duration-1000 sm:p-8"
           :class="perfect ? 'border-mint/60 bg-mint/10 shadow-[0_0_90px_-10px_rgba(52,245,165,.6)]' : 'border-white/10 bg-white/[.04]'">
        <div class="mb-6 flex items-center gap-4">
          <div class="h-2 flex-1 overflow-hidden rounded-full bg-white/10" role="progressbar" :aria-valuenow="Math.round(progress)" aria-valuemin="0" aria-valuemax="100">
            <div class="h-full rounded-full bg-gradient-to-r from-aqua via-volt to-wine transition-all duration-700" :style="{ width: progress + '%' }"></div>
          </div>
          <span class="text-xs font-semibold text-slate-400">{{ messages.length - pending.length }}/{{ messages.length }}</span>
        </div>

        <div class="grid gap-4 md:grid-cols-3" aria-live="polite">
          <article v-for="m in pending" :key="m.id" draggable="true"
                   class="animate-pop cursor-grab rounded-2xl border border-white/15 bg-ink-800/80 p-5 shadow-lg transition hover:-translate-y-1 hover:border-volt/60 active:cursor-grabbing"
                   @dragstart="dragging = m.id" @dragend="dragging = null; over = null">
            <GripVertical class="h-4 w-4 text-slate-500" />
            <p class="mt-2 font-medium leading-snug text-white">“{{ m.text }}”</p>
            <div class="mt-4 flex gap-2">
              <button class="btn-ghost flex-1 !px-3 !py-2.5 hover:!border-alarm/70 hover:!bg-alarm/15" @click="decide(m.id, 'trash')"><Trash2 class="h-4 w-4" />Lixeira</button>
              <button class="btn-ghost flex-1 !px-3 !py-2.5 hover:!border-mint/70 hover:!bg-mint/15" @click="decide(m.id, 'keep')"><Table2 class="h-4 w-4" />Manter</button>
            </div>
          </article>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <div v-for="(z, zi) in zones" :key="z"
               class="relative min-h-44 rounded-2xl border-2 border-dashed p-4 transition duration-300"
               :class="[over === z ? (z === 'trash' ? 'scale-[1.02] border-alarm bg-alarm/10' : 'scale-[1.02] border-mint bg-mint/10') : 'border-white/20 bg-white/[.03]', shaking === zi + 1 && 'animate-shake']"
               @dragover.prevent="over = z" @dragleave="over = null" @drop.prevent="onDrop(z)">
            <p class="flex items-center gap-2 font-semibold text-white">
              <component :is="z === 'trash' ? Trash2 : Table2" class="h-5 w-5" :class="z === 'trash' ? 'text-alarm' : 'text-mint'" />{{ z === 'trash' ? 'Lixeira' : 'Mesa' }}
            </p>
            <div class="mt-3 space-y-3">
              <div v-for="m in inZone(z)" :key="m.id" class="animate-pop rounded-xl p-3 text-sm" :class="isRight(m) ? 'bg-mint/10 ring-1 ring-mint/40' : 'bg-alarm/10 ring-1 ring-alarm/40'">
                <p class="flex items-center gap-2 font-semibold" :class="isRight(m) ? 'text-mint' : 'text-alarm'">
                  <CheckCircle2 v-if="isRight(m)" class="h-4 w-4 shrink-0" /><XCircle v-else class="h-4 w-4 shrink-0" />
                  {{ isRight(m) ? 'Certo!' : 'Cuidado!' }} {{ m.scam ? `Era golpe (${m.kind}).` : 'Era uma mensagem legítima.' }}
                </p>
                <p class="mt-1 text-slate-400">{{ m.why }}</p>
              </div>
            </div>
            <template v-for="b in bursts" :key="b.id">
              <div v-if="b.zone === z" class="pointer-events-none absolute left-1/2 top-1/2" aria-hidden="true">
                <span v-for="(s, i) in sparks" :key="i" class="absolute h-2 w-2 animate-[burst_.8s_ease-out_forwards] rounded-full" :class="['bg-mint', 'bg-aqua', 'bg-volt'][i % 3]" :style="s as any"></span>
              </div>
            </template>
          </div>
        </div>

        <div v-if="done" class="mt-6 flex animate-pop flex-wrap items-center justify-between gap-3">
          <p class="text-lg font-semibold" :class="perfect ? 'text-mint' : 'text-white'">
            {{ perfect ? 'Desafio concluído! A sala acendeu em verde.' : `Você acertou ${score} de ${messages.length}. Tente de novo.` }}
          </p>
          <button class="btn-primary" @click="reset"><RotateCcw class="h-4 w-4" />Jogar novamente</button>
        </div>
      </div>
    </div>
  </section>
</template>
