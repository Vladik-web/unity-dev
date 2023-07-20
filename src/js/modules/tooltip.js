import tippy from 'tippy.js'

const tooltip = () => {
  // 1
  tippy('[data-tippy-content]', {
    arrow: false,
    placement: 'top',
    animation: 'scale-subtle',
    inertia: true
  })
}
export default tooltip
