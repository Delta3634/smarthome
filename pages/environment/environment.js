// pages/environment/environment.js
Page({
    data: {
      temp: 25.5,
      humidity: 60,
      co2: 600,
      pm25: 12,
      noise: 45,
      hcho: 0.08,
      pressure: 1013,
      light: 300
    },
  
    onLoad() {
      this.fetchData();//真实数据获取
      this.startMockUpdate()//mock数据更新（仅用于测试其他参数）
    },
  
    startMockUpdate() {
      this.timer = setInterval(() => {
        this.updateData()
      }, 2000)
    },
  
    updateData() {
      this.setData({
        temp: (Math.random() * 15 + 20).toFixed(1),
        humidity: (Math.random() * 40 + 30).toFixed(0),
        co2: Math.floor(Math.random() * 600 + 400),
        pm25: Math.floor(Math.random() * 50),
        noise: Math.floor(Math.random() * 20 + 40),
        hcho: (Math.random() * 0.1).toFixed(2),
        pressure: Math.floor(Math.random() * 20 + 1000),
        light: Math.floor(Math.random() * 1000 + 50)
      })
    },
  
    onUnload() {
      clearInterval(this.timer)
    }
  })