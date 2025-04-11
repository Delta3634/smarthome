// pages/history/history.js
Page({
    onReady() {
      this.drawMockChart()
    },
  
    drawMockChart() {
      const ctx = wx.createCanvasContext('tempChart')
      const data = Array.from({length: 24}, () => Math.random() * 10 + 20)
      
      // 绘制折线图
      ctx.beginPath()
      data.forEach((v, i) => {
        const x = 50 + i * 30
        const y = 400 - v * 10
        if(i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
        ctx.arc(x, y, 2, 0, 2 * Math.PI)
      })
      
      ctx.setStrokeStyle('#2d8cf0')
      ctx.setLineWidth(2)
      ctx.stroke()
  
      // 绘制坐标轴
      ctx.beginPath()
      ctx.moveTo(30, 400)
      ctx.lineTo(750, 400)
      ctx.moveTo(30, 400)
      ctx.lineTo(30, 100)
      ctx.setStrokeStyle('#666')
      ctx.stroke()
  
      ctx.draw()
    }
  })