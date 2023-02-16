

export function usePrevention () {
    const prevDefault = event => {
        event.preventDefault()
    }

    return { prevDefault }
}