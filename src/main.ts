import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

// v-reveal: entra suavemente quando aparece na tela; v-spot: brilho que segue o cursor
const io: IntersectionObserver | null = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver((es, obs) => es.forEach(e => {
      if (e.isIntersecting) { (e.target as HTMLElement).classList.add('in'); obs.unobserve(e.target) }
    }), { threshold: 0.15 })
  : null

app.directive('reveal', {
  mounted(el: HTMLElement, b) {
    el.classList.add('reveal')
    if (b.value) el.style.setProperty('--d', `${b.value}ms`)
    io ? io.observe(el) : el.classList.add('in')
  }
})
app.directive('spot', {
  mounted(el: HTMLElement) {
    el.classList.add('spot')
    el.addEventListener('pointermove', (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    })
  }
})

app.use(router).mount('#app')
