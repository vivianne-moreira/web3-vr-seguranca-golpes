<script setup lang="ts">
import { Github, ShieldCheck } from "lucide-vue-next";
import { REPO_URL } from "@/data/messages";

const team = [
  { name: "Vivianne Moreira", image: "/images/Foto_Vivianne.jpeg" },
  { name: "Jones Mendes", image: "/images/Foto_Jones.jpeg" },
  { name: "Josias Batista", image: "/images/Foto_Josias.jpeg" },
  { name: "Carlos Delfino", image: "/images/Foto_Carlos.jpeg" },
];
</script>

<template>
  <footer
    id="equipe"
    class="relative z-10 mt-10 border-t border-white/10 bg-ink-950/80 backdrop-blur"
  >
    <div
      class="h-px bg-gradient-to-r from-transparent via-volt to-transparent"
    ></div>
    <div
      class="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1.5fr_1fr]"
    >
      <div>
        <p
          class="flex items-center gap-2 font-display text-lg font-bold text-white"
        >
          <span
            class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-aqua via-volt to-wine text-ink-950"
            ><ShieldCheck class="h-5 w-5" /></span
          >CyberAlert VR
        </p>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
          Projeto desenvolvido para o Hackathon Web 3.0. Segurança digital
          aprendida com as mãos.
        </p>
      </div>
      <div>
        <h2 class="text-base font-semibold">Equipe</h2>
        <ul class="mt-4 grid gap-3 sm:grid-cols-2">
          <li
            v-for="p in team"
            :key="p.name"
            class="flex items-center gap-3 text-sm text-slate-300"
          >
            <img
              :src="p.image"
              :alt="`Foto de ${p.name}`"
              class="relative z-0 h-9 w-9 shrink-0 rounded-full object-cover transition-transform duration-200 ease-out hover:z-10 hover:scale-[2.5] hover:shadow-[0_0_24px_rgba(56,189,248,0.9)]"
            />
            {{ p.name }}
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-base font-semibold">Links</h2>
        <a
          :href="REPO_URL"
          target="_blank"
          rel="noopener"
          class="btn-ghost mt-4 !px-4 !py-2.5"
          ><Github class="h-4 w-4" />Repositório no GitHub</a
        >
      </div>
    </div>
    <p
      class="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500"
    >
      © {{ new Date().getFullYear() }} CyberAlert VR. Feito para o Hackathon Web
      3.0.
    </p>
  </footer>
</template>
