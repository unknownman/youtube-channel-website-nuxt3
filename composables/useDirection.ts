export function useDirection() {
    const { locale } = useI18n()
    
    const isRTL = computed(() => {
        return ['fa', 'ar'].includes(locale.value)
    })

    return {
        isRTL
    }
}