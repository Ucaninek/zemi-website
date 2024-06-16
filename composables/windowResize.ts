import { ref, onMounted, onUnmounted } from 'vue'

export default function useWindowResize() {
    const windowWidth = ref(0)

    onMounted(() => {
        window.addEventListener('resize', update)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', update)
    })

    const update = () => {
        windowWidth.value = window.innerWidth
    }

    return {
        windowWidth
    }
}