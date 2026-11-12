<script setup lang="ts">
import { Home, Landmark, AlertTriangle, Glasses, Globe, Orbit } from 'lucide-vue-next'

const cards = [
  { icon: Home, title: 'Sua Casa Digital', tag: 'Imersão', text: 'No Metaverso você interage fisicamente com itens e pessoas por meio do headset, como se estivesse no mesmo lugar que eles.', color: 'text-aqua', glow: 'from-aqua/30', span: 'md:col-span-3' },
  { icon: Landmark, title: 'Seu Próprio Banco', tag: 'Autocustódia', text: 'Suas senhas e ativos ficam sob sua posse exclusiva. Não há gerente de banco no meio para recuperar o que você perder.', color: 'text-volt', glow: 'from-volt/35', span: 'md:col-span-3' },
  { icon: AlertTriangle, title: 'O Risco da Impulsividade', tag: 'Engenharia Social', text: 'Golpistas usam airdrops falsos e pedidos de palavras de recuperação para enganar você. O elo mais fraco continua sendo o comportamento humano.', color: 'text-alarm', glow: 'from-alarm/25', span: 'md:col-span-6' }
]
</script>
<template>
  <section id="conceito">
    <div class="section">
      <div class="grid items-end gap-10 lg:grid-cols-2">
        <div v-reveal>
          <h2 class="title">Realidade Virtual + Web 3.0, sem complicação</h2>
          <p class="lead">
            Realidade Virtual (VR) é usar um headset para entrar em um ambiente digital em três dimensões. Web 3.0 é uma internet descentralizada: você tem uma carteira digital, uma identidade própria e ninguém controla isso por você. Juntas, formam o Metaverso, um lugar onde você também guarda e movimenta valor.
          </p>
        </div>

        <div v-reveal="150" class="flex flex-wrap items-center justify-center gap-3 sm:gap-4" aria-label="Realidade Virtual mais Web 3.0 igual a Metaverso">
          <div class="flex flex-col items-center gap-2 rounded-3xl bg-gradient-to-br from-aqua via-volt to-wine p-px">
            <div class="flex flex-col items-center gap-2 rounded-[calc(1.5rem-1px)] bg-ink-900 px-5 py-5 text-aqua">
              <Glasses class="h-8 w-8" />
              <span class="text-sm font-semibold text-white">Realidade Virtual</span>
            </div>
          </div>

          <span class="font-display text-3xl font-bold text-slate-500">+</span>

          <div class="flex flex-col items-center gap-2 rounded-3xl bg-gradient-to-br from-aqua via-volt to-wine p-px">
            <div class="flex flex-col items-center gap-2 rounded-[calc(1.5rem-1px)] bg-ink-900 px-5 py-5 text-aqua">
              <Globe class="h-8 w-8" />
              <span class="text-sm font-semibold text-white">Web 3.0</span>
            </div>
          </div>

          <span class="font-display text-3xl font-bold text-slate-500">=</span>

          <div class="flex flex-col items-center gap-2 rounded-3xl bg-gradient-to-br from-aqua via-volt to-wine p-px">
            <div class="flex flex-col items-center gap-2 rounded-[calc(1.5rem-1px)] bg-ink-900 px-5 py-5 text-aqua">
              <Orbit class="h-8 w-8 animate-spin-slow" />
              <span class="text-sm font-semibold text-white">Metaverso</span>
            </div>
          </div>
        </div>
      </div>

      <h3 id="seguranca" v-reveal class="mt-20 font-display text-2xl font-bold sm:text-3xl">Por que a segurança é crucial</h3>
      <div class="mt-8 grid gap-5 md:grid-cols-6">
        <article v-for="(c, i) in cards" :key="c.title" v-reveal="i * 120" v-spot class="glass group p-6 transition duration-500 hover:-translate-y-1 hover:border-white/25 sm:p-8" :class="c.span">
          <div class="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full blur-2xl transition-opacity group-hover:opacity-100" :class="[c.glow, 'opacity-60']"></div>
          <span class="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition group-hover:scale-110 group-hover:rotate-6" :class="c.color"><component :is="c.icon" class="h-6 w-6" /></span>
          <p class="relative mt-5 text-xs font-semibold" :class="c.color">{{ c.tag }}</p>
          <h4 class="relative mt-1 text-xl font-bold">{{ c.title }}</h4>
          <p class="relative mt-3 max-w-2xl leading-relaxed text-slate-400">{{ c.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
