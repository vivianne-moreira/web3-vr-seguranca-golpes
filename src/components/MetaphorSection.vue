<script setup lang="ts">
import { Brain, Hand, Eye, Trash2, ChevronRight } from 'lucide-vue-next'

const gesture = [
  { icon: Hand, label: 'Pega a mensagem', color: 'text-aqua' },
  { icon: Eye, label: 'Reconhece o golpe', color: 'text-volt' },
  { icon: Trash2, label: 'Arremessa no lixo', color: 'text-[#FFB3C0]' }
]
</script>

<template>
  <section id="metafora" class="px-5 py-10 sm:px-8 sm:py-16">
    <div v-reveal class="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#8B1E3F] p-8 sm:p-14" style="background: linear-gradient(135deg, #12060A 0%, #5E0F20 55%, #8B1E3F 115%)">
      <div class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 animate-aurora rounded-full bg-aqua/30 blur-[90px]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 animate-aurora rounded-full bg-volt/30 blur-[90px] [animation-delay:-6s]" aria-hidden="true"></div>

      <div class="relative">
        <span class="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur"><Brain class="h-7 w-7" /></span>
        <h2 class="mt-6 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl">Segurar a mensagem falsa e jogá-la fora ensina mais do que ler sobre isso.</h2>
        <div class="mt-8 grid gap-6 text-base leading-relaxed text-white/80 sm:text-lg md:grid-cols-2">
          <p>Em uma tela 2D, você lê um alerta e segue em frente. Na Realidade Virtual, o corpo participa: você pega a mensagem com a mão, reconhece o golpe e a arremessa no lixo.</p>
          <p>Esse gesto treina a memória muscular. Com repetição, desconfiar antes de autorizar qualquer transação deixa de ser uma regra decorada e vira hábito.</p>
        </div>

        <ol class="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <template v-for="(g, i) in gesture" :key="g.label">
            <li class="flex flex-1 items-center gap-3 rounded-2xl border border-[#8B1E3F] bg-ink-950/40 px-5 py-4 backdrop-blur">
              <component :is="g.icon" class="h-6 w-6 shrink-0" :class="g.color" /><span class="text-sm font-semibold text-white">{{ g.label }}</span>
            </li>
            <ChevronRight v-if="i < gesture.length - 1" class="hidden h-5 w-5 shrink-0 text-white/50 sm:block" aria-hidden="true" />
          </template>
        </ol>
      </div>
    </div>
  </section>
</template>