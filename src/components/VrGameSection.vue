<script setup lang="ts">
import { Hand, Trash2, Table2, Volume2, Sparkles, Lightbulb } from 'lucide-vue-next'
import { messages } from '@/data/messages'

const feedback = [
  { icon: Volume2, text: 'Sons de confirmação a cada decisão correta.', color: 'text-aqua' },
  { icon: Sparkles, text: 'Efeitos visuais de acerto ao cair na lixeira.', color: 'text-volt' },
  { icon: Lightbulb, text: 'A sala inteira se acende em verde quando o desafio termina.', color: 'text-mint' }
]
</script>

<template>
  <section id="jogo">
    <div class="section">
      <div class="grid items-end gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div v-reveal>
          <h2 class="title">O nosso jogo em Realidade Virtual</h2>
          <p class="lead">
            Criado em Unity com o Meta XR SDK. Você coloca o Meta Quest e três cartões de mensagem flutuam na sua frente. Com as mãos, usando o gesto de pegar (Grab), descarte as ameaças na lixeira virtual e mantenha o que é legítimo na mesa.
          </p>
        </div>
        <p v-reveal="120" class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white lg:justify-self-end">
          <Hand class="h-6 w-6 shrink-0 text-aqua" />Interação 100% com as mãos, sem controles.
        </p>
      </div>

      <!-- "visor" do headset -->
      <div v-reveal class="relative mt-12 rounded-[2rem] border border-white/10 bg-gradient-to-b from-ink-800/70 to-ink-900/70 p-5 pb-10 sm:p-10 sm:pb-14">
        <span class="absolute left-3 top-3 h-6 w-6 rounded-tl-xl border-l-2 border-t-2 border-aqua"></span>
        <span class="absolute right-3 top-3 h-6 w-6 rounded-tr-xl border-r-2 border-t-2 border-aqua"></span>
        <span class="absolute bottom-3 left-3 h-6 w-6 rounded-bl-xl border-b-2 border-l-2 border-aqua"></span>
        <span class="absolute bottom-3 right-3 h-6 w-6 rounded-br-xl border-b-2 border-r-2 border-aqua"></span>

        <div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="(m, i) in messages" :key="m.id" v-spot
            class="rounded-2xl border bg-ink-900/80 p-5 backdrop-blur transition hover:scale-[1.03]"
            :class="[m.scam ? 'border-alarm/40 shadow-[0_0_34px_-10px_rgba(255,92,122,.7)]' : 'border-mint/40 shadow-[0_0_34px_-10px_rgba(52,245,165,.7)]', i % 2 ? 'animate-floatB' : 'animate-float']"
            :style="{ animationDelay: `${i * -1.6}s` }"
          >
            <p class="text-xs font-bold" :class="m.scam ? 'text-alarm' : 'text-mint'">Mensagem {{ m.id }}: {{ m.kind }}</p>
            <p class="mt-3 text-lg font-medium leading-snug text-white">“{{ m.text }}”</p>
            <p class="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-sm font-semibold text-slate-300">
              <component :is="m.scam ? Trash2 : Table2" class="h-4 w-4" :class="m.scam ? 'text-alarm' : 'text-mint'" />
              Destino: {{ m.scam ? 'Lixeira' : 'Mesa (manter intacta)' }}
            </p>
          </article>
        </div>
        <!-- piso luminoso -->
        <div class="pointer-events-none absolute inset-x-10 bottom-0 h-10 rounded-[100%] bg-gradient-to-r from-aqua/0 via-volt/40 to-wine/0 blur-xl" aria-hidden="true"></div>
      </div>

      <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <div v-for="(f, i) in feedback" :key="f.text" v-reveal="i * 100" class="glass flex items-start gap-3 !rounded-2xl p-5">
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10" :class="f.color"><component :is="f.icon" class="h-5 w-5" /></span>
          <span class="pt-1 text-sm leading-relaxed text-slate-300">{{ f.text }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
