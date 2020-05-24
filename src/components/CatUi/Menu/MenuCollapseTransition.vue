<script>
import { addClass, removeClass, hasClass } from '../utils/dom'

export default {
  functional: true,
  render (createElement, context) {
    const data = {
      props: {
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          el.style.opacity = 0.2
        },

        enter (el) {
          addClass(el, 'cat-opacity-transition')
          el.style.opacity = 1
        },

        afterEnter (el) {
          removeClass(el, 'cat-opacity-transition')
          el.style.opacity = ''
        },

        beforeLeave (el) {
          if (!el.dataset) el.dataset = {}

          if (hasClass(el, 'cat-menu--collapse')) {
            removeClass(el, 'cat-menu--collapse')
            el.dataset.oldOverflow = el.style.overflow
            el.dataset.scrollWidth = el.clientWidth
            addClass(el, 'cat-menu--collapse')
          } else {
            addClass(el, 'cat-menu--collapse')
            el.dataset.oldOverflow = el.style.overflow
            el.dataset.scrollWidth = el.clientWidth
            removeClass(el, 'cat-menu--collapse')
          }

          el.style.width = el.scrollWidth + 'px'
          el.style.overflow = 'hidden'
        },

        leave (el) {
          addClass(el, 'horizontal-collapse-transition')
          el.style.width = el.dataset.scrollWidth + 'px'
        }
      }
    }
    return createElement('transition', data, context.children)
  }
}
</script>
