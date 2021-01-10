class HsCanvasCommand {
  constructor(canvasEl) {
    this.canvasEl = canvasEl;
    this.context = canvasEl.getContext("2d");
    // 属性类指令
    this.properties = ["fillStyle", "strokeStyle", "lineWidth"]
  }
  drawByCommands (commands) {
    commands.forEach((item) => {
      const name = item[0];
      if (this.properties.includes(name)) {
        this.context[name] = item[1];
      } else {
        this.context[name](...item[1]);
      }
    });
  }
}