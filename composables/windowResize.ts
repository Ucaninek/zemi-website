import { ref, onMounted, onUnmounted } from 'vue'

export default function useWindowResize() {
    const windowWidth = ref(0)

    onMounted(() => {
        window.addEventListener('resize', update)
        update() //prevent initial value from being 0
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