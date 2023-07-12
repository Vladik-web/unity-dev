import tippy from 'tippy.js'

const tooltip = () => {
  // 1
  tippy('.lesson__icon[data-tippy-content]', {
    arrow: false,
    placement: 'top',
    animation: 'scale-subtle',
    inertia: true
  })

  // 2
  tippy('.lesson__button[data-tippy-content]', {
    arrow: false,
    placement: 'top',
    animation: 'scale-subtle',
    inertia: true
  })
}
export default tooltip
