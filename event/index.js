class Event {
  events = {}

  constructor() {}

  on(event, fn) {
    if (Array.isArray(event)) {
      event.forEach((e) => {
        this.on(e, fn)
      })
      return this
    }
    const cacheEvent = (this.events[event] = this.events[event] || [])
    cacheEvent.push(fn)
    return this
  }

  once(event, fn) {
    function on() {
      this.off(event, on)
      fn.apply(this, arguments)
    }
    on.fn = fn
    this.on(event, on)
    return this
  }
  emit(event) {
    if (!event) return this
    const cacheEvent = this.events[event]
    if (!cacheEvent) return this
    const args = Array.from(arguments).slice(1)
    cacheEvent.forEach((e) => {
      e.apply(this, args)
    })
    return this
  }

  off(event, fn) {
    if (!event) {
      this.events = {}
      return this
    }
    if (Array.isArray(event)) {
      event.forEach((e) => {
        this.off(e, fn)
      })
      return this
    }
    const cacheEvent = this.events[event]
    if (!cacheEvent) return this
    if (!fn) {
      this.events[event] = []
      return this
    }
    let i = cacheEvent.length
    while (i--) {
      let cb = cacheEvent[i]
      if (cb === fn || cb.fn === fn) {
        cacheEvent.splice(i, 1)
      }
    }
    return this
  }
}

const event = new Event()
function a() {
  console.log("a")
}
function b() {
  console.log("b")
}
event.on("abc", a)
event.once("abc", b)

event.emit("abc")
event.emit("abc")
event.emit("abc")
event.emit("abc")
