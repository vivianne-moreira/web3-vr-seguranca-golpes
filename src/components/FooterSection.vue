<script setup lang="ts">
import { Github, ShieldCheck } from "lucide-vue-next";
import { REPO_URL } from "@/data/messages";

const team = [
  "Vivianne Moreira",
  "Jones Mendes",
  "Josias Batista",
  "Carlos Delfino",
];
const initials = (n: string) =>
  n
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
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
            :key="p"
            class="flex items-center gap-3 text-sm text-slate-300"
          >
            <span
              class="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-wave to-volt text-xs font-bold text-white"
              >{{ initials(p) }}</span
            >{{ p }}
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
