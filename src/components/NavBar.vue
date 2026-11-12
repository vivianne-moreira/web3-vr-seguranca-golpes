<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Menu, X, ShieldCheck, Github } from "lucide-vue-next";
import { REPO_URL } from "@/data/messages";

const open = ref(false);
const scrolled = ref(false);
const progress = ref(0);
const active = ref("");

const links = [
  { label: "Conceito", hash: "#conceito" },
  { label: "Segurança", hash: "#seguranca" },
  { label: "O Jogo em VR", hash: "#jogo" },
  { label: "Como Jogar", hash: "#como-jogar" },
  { label: "A Metáfora", hash: "#metafora" },
  { label: "Equipe", hash: "#equipe" },
];

let io: IntersectionObserver | null = null;

const onScroll = () => {
  scrolled.value = window.scrollY > 24;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = max > 0 ? (window.scrollY / max) * 100 : 0;

  if (window.scrollY < 120) {
    active.value = "";
  }
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  io = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (e.isIntersecting && window.scrollY >= 120) {
          active.value = "#" + e.target.id;
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  links.forEach((l) => {
    const el = document.querySelector(l.hash);
    if (el) io!.observe(el);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  io?.disconnect();
});
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
    <nav
      class="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-2xl border px-3 backdrop-blur-xl transition-all duration-500 sm:px-4"
      :class="
        scrolled
          ? 'border-white/15 bg-ink-900/80 shadow-[0_10px_40px_-10px_rgba(200,48,77,.5)]'
          : 'border-white/5 bg-ink-900/30'
      "
      aria-label="Navegação principal"
    >
      <RouterLink
        to="/"
        active-class=""
        exact-active-class=""
        class="group flex shrink-0 items-center gap-2.5 font-display text-sm font-bold text-white"
        @click="active = ''"
      >
        <span
          class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-aqua via-volt to-wine text-ink-950 transition group-hover:rotate-12"
        >
          <ShieldCheck class="h-5 w-5" />
        </span>
        CyberAlert VR
      </RouterLink>

      <div class="ml-auto hidden items-center gap-3 lg:flex">
        <ul class="flex items-center gap-1">
          <li v-for="l in links" :key="l.hash">
            <RouterLink
              :to="{ path: '/', hash: l.hash }"
              active-class=""
              exact-active-class=""
              class="relative rounded-lg px-3 py-2 text-[13px] font-medium transition-colors"
              :class="
                active === l.hash
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              "
              @click="active = l.hash"
            >
              {{ l.label }}
              <span
                class="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded bg-gradient-to-r from-aqua to-volt transition-transform duration-300"
                :class="active === l.hash ? 'scale-x-100' : 'scale-x-0'"
              ></span>
            </RouterLink>
          </li>
        </ul>

        <a
          :href="REPO_URL"
          target="_blank"
          rel="noopener"
          class="btn-ghost shrink-0 !px-4 !py-2 text-xs"
        >
          <Github class="h-4 w-4" /> GitHub
        </a>
      </div>

      <button
        type="button"
        class="ml-auto grid h-10 w-10 place-items-center rounded-xl text-white transition hover:bg-white/10 lg:hidden"
        :aria-expanded="open"
        aria-label="Abrir menu de navegação"
        @click="open = !open"
      >
        <X v-if="open" class="h-6 w-6" />
        <Menu v-else class="h-6 w-6" />
      </button>
    </nav>

    <div
      class="mx-auto mt-1 h-0.5 max-w-6xl overflow-hidden rounded bg-transparent px-4"
    >
      <div
        class="h-full rounded bg-gradient-to-r from-aqua via-volt to-wine"
        :style="{ width: progress + '%' }"
      ></div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="open"
        class="glass mx-auto mt-2 max-w-6xl !rounded-2xl !bg-ink-900/95 p-5 shadow-2xl lg:hidden"
      >
        <ul class="grid gap-1.5 sm:grid-cols-2">
          <li v-for="l in links" :key="l.hash">
            <RouterLink
              :to="{ path: '/', hash: l.hash }"
              active-class=""
              exact-active-class=""
              class="block rounded-xl px-4 py-3.5 text-base font-medium transition"
              :class="
                active === l.hash
                  ? 'bg-white/15 font-semibold text-white'
                  : 'text-slate-200 hover:bg-white/10 hover:text-white'
              "
              @click="
                active = l.hash;
                open = false;
              "
            >
              {{ l.label }}
            </RouterLink>
          </li>
        </ul>

        <a
          :href="REPO_URL"
          target="_blank"
          rel="noopener"
          class="btn-primary mt-4 flex w-full items-center justify-center gap-2 py-3.5 text-base"
          @click="open = false"
        >
          <Github class="h-5 w-5" />
          Ver no GitHub
        </a>
      </div>
    </transition>
  </header>
</template>
