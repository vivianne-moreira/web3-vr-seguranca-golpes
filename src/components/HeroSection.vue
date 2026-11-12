<script setup lang="ts">
import { Glasses } from 'lucide-vue-next'
import avatar from '@/assets/hero-avatar.webp'
</script>

<template>
  <section class="relative overflow-hidden pt-28 sm:pt-32">
    <div class="grid-bg absolute inset-0 opacity-60" aria-hidden="true"></div>
    <div class="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0 lg:pb-28">
      
      <div class="z-10 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-end">
        <h1 class="mt-2 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:mt-6 lg:text-[3.4rem]">
          Desconfiar antes de clicar: <span class="grad-text">o reflexo físico da segurança no Metaverso.</span>
        </h1>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
        Na Web 3.0, não existe botão de desfazer: clicou em um golpe, perdeu. No <strong class="font-semibold text-white">CyberAlert VR</strong>, você entra em realidade virtual para transformar cautela em reflexo, identificando e jogando armadilhas no lixo com as próprias mãos.
        </p>
      </div>

      <div class="relative mx-auto w-full max-w-2xl lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:translate-y-6">
        <div class="absolute left-1/2 top-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-wave/45 via-wine/40 to-transparent blur-3xl" aria-hidden="true"></div>
        <img
          :src="avatar"
          width="1400"
          height="810"
          alt="Avatar em realidade virtual estendendo a mão"
          class="relative mx-auto w-[115%] max-w-none -ml-[7.5%] select-none drop-shadow-[0_0_28px_rgba(200,48,77,.35)] sm:w-full sm:ml-0 lg:w-[135%] lg:-mr-[35%] lg:scale-105"
          fetchpriority="high"
        />
      </div>

      <div class="z-10 grid grid-cols-2 gap-2.5 sm:flex sm:flex-nowrap sm:items-center sm:gap-3 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:mt-9 lg:self-start">
        <RouterLink
          :to="{ path: '/', hash: '#como-jogar' }"
          class="btn-primary flex items-center justify-center gap-2 whitespace-nowrap px-3 text-xs sm:px-5 sm:text-sm"
        >
          <Glasses class="h-4 w-4 shrink-0" />
          <span>Jogar agora</span>
        </RouterLink>

        <RouterLink
          :to="{ path: '/', hash: '#jogo' }"
          class="btn-ghost flex items-center justify-center whitespace-nowrap px-3 text-xs sm:px-5 sm:text-sm"
        >
          <span>Conhecer experiência</span>
        </RouterLink>
      </div>

    </div>
  </section>
</template>