<script setup lang="ts">
import { ref } from 'vue'
import { Cpu, Boxes, Glasses, VideoOff } from 'lucide-vue-next'

const videoSrc = '/video-backup.mp4'
const failed = ref(false)

const specs = [
  { icon: Cpu, label: 'Engine', value: 'Unity', color: 'text-aqua' },
  { icon: Boxes, label: 'SDK', value: 'Meta XR SDK (Building Blocks)', color: 'text-volt' },
  { icon: Glasses, label: 'Dispositivos', value: 'Meta Quest 2, 3 e Pro', color: 'text-[#FFB3C0]' }
]
</script>

<template>
  <section id="demo">
    <div class="section grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
      <div v-reveal>
        <div class="rounded-[1.75rem] bg-gradient-to-br from-aqua via-volt to-wine p-px shadow-[0_0_70px_-15px_rgba(200,48,77,.8)]">
          <div class="overflow-hidden rounded-[calc(1.75rem-1px)] bg-ink-950">
            <div v-if="failed" class="grid aspect-video w-full place-items-center p-6 text-center">
              <div><VideoOff class="mx-auto h-10 w-10 text-slate-500" /><p class="mt-3 text-sm text-slate-400">Vídeo em breve.</p></div>
            </div>
            <video v-else class="aspect-video w-full" controls preload="metadata" playsinline :src="videoSrc" @error="failed = true">Seu navegador não suporta vídeo.</video>
          </div>
        </div>
        <p class="mt-3 text-sm text-slate-500">Gravação de backup do teste no headset.</p>
      </div>
      <div>
        <h2 v-reveal class="title !text-3xl sm:!text-4xl">Demonstração e especificações técnicas</h2>
        <ul class="mt-6 space-y-3">
          <li v-for="(s, i) in specs" :key="s.label" v-reveal="i * 100" v-spot class="glass flex items-center gap-4 !rounded-2xl p-4 transition hover:translate-x-1 hover:border-white/25">
            <span class="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10" :class="s.color"><component :is="s.icon" class="h-5 w-5" /></span>
            <div class="relative"><p class="text-xs text-slate-500">{{ s.label }}</p><p class="font-semibold text-white">{{ s.value }}</p></div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
