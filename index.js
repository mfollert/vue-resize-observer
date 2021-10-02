import throttle from "lodash.throttle"
import ResizeObserver from "resize-observer-polyfill"

export const ResizeObserverDirective = {
    inserted(el, conds) {
        if (typeof process === "undefined" || !process.server) {
            const handleResize = throttle(entries => {
                if (typeof conds.value === "function") {
                    conds.value()
                }
                console.log(conds.value)
            }, 200)

            const observer = new ResizeObserver(handleResize)
            observer.observe(el)
        }
    }
}

export const VueResizeObserver = Vue => {
    Vue.directive("ResizeObserver", ResponsiveDirective)
}
