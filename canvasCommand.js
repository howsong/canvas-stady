class hsCanvasApi {
  constructor(configs) {
    this.context = null
    this.canvas = null
    this.init(configs)
  }
  init (configs) {
    const canvas = document.createElement('canvas')
    canvas.style.cssText = configs.cssText
    document.body.appendChild(canvas)
    this.canvas = canvas
    this.context = canvas.getContext('2d')
  }
  drawByCommands (comands) {
    comands.forEach(() => {
      
    })
  }
  rect (args) {
    this.context.rect(...args)
    return this
  }
}