Page({
    data: {
      temp: 25.5,
      humidity: 60,
      light: 300,
      pm25: 12,
      devices: [
        { id: 1, name: "客厅灯光", status: false },
        { id: 2, name: "空调", status: true },
        { id: 3, name: "新风系统", status: false }
      ],
      suggestion: ""
    },
  
    onLoad() {
      // 启动模拟数据更新
      this.startMockUpdate()
    },
  
    // 模拟数据更新
    startMockUpdate() {
      this.timer = setInterval(() => {
        this.updateMockData()
      }, 3000)
    },
  
    // 生成模拟数据
    updateMockData() {
      const newData = {
        temp: (Math.random() * 15 + 20).toFixed(1),
        humidity: (Math.random() * 40 + 30).toFixed(0),
        light: (Math.random() * 1000 + 50).toFixed(0),
        pm25: (Math.random() * 100).toFixed(0),
        suggestion: this.generateSuggestion()
      }
      this.setData(newData)
    },
  
    // 生成AI建议
    generateSuggestion() {
      const { temp, humidity, pm25 } = this.data
      const suggestions = []
      
      if (pm25 > 75) suggestions.push("空气质量较差，建议开启新风系统")
      if (temp > 28) suggestions.push("温度较高，建议开启空调")
      if (temp < 18) suggestions.push("温度较低，建议关闭空调")
      if (humidity > 70) suggestions.push("湿度较大，建议开启除湿模式")
      if (this.data.devices[0].status && this.data.light < 100) 
        suggestions.push("检测到低光照时开灯，建议关闭主灯")
  
      return suggestions.length > 0 ? suggestions.join("\n") : "当前环境状态良好"
    },
  
    // 设备开关控制
    toggleDevice(e) {
      const deviceId = e.currentTarget.dataset.id
      const status = e.detail.value
      
      // 直接更新本地数据
      const devices = this.data.devices.map(d => {
        if (d.id === deviceId) d.status = status
        return d
      })
      
      this.setData({ devices }, () => {
        wx.showToast({
          title: status ? '已开启' : '已关闭',
          icon: 'success',
          duration: 500
        })
        this.setData({ suggestion: this.generateSuggestion() })
      })
    },
  
    onUnload() {
      clearInterval(this.timer)
    }
  })