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
        const args = item[1] || []
        this.context[name](...args);
      }
    });
  }
  // 绘制三角形
  triangle (options) {
    const commands = [
      ['moveTo', options.one],
      ['lineTo', options.second],
      ['lineTo', options.third],
      ['lineTo', options.one],
      ['fillStyle', options.fillColor || 'red'],
      ['fill', []],
      ['lineWidth', [options.lineWidth]],
      ['strokeStyle', ['#005588']],
      ['stroke', []]
    ]
    this.drawByCommands(commands)
  }
}