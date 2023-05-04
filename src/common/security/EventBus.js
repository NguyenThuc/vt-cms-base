const eventBus = {
  on(event, callback) {
    console.log(`Event Bus have create event ${event}`)
    document.addEventListener(event, (e) => callback(e.detail))
  },
  dispatch(event, data) {
    console.log(`Event Bus have dispatch event ${event}`)
    document.dispatchEvent(new CustomEvent(event, { detail: data }))
  },
  remove(event, callback) {
    console.log(`Event Bus have remove event ${event}`)
    document.removeEventListener(event, callback)
  },
}

export default eventBus
