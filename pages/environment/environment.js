// pages/environment/environment.js
Page({
    data: { 
      temperature: "0", 
      humidity: "0",
      co2: 600,
      pm25: 12,
      noise: 45,
      hcho: 0.08,
      pressure: 1013,
      light: 300
    },
    onLoad: function() {
      this.fetchData();
      // 每隔5秒调用一次fetchData函数
      this.dataUpdateInterval = setInterval(() => {
        this.fetchData();
      }, 5000);
    },
    fetchData() {
      wx.request({
        url: 'http://172.20.10.14:80/data', // 替换为实际的后端接口地址
        method: 'GET',
        success: (res) => {
          if (res.statusCode === 200) {
            const { temperature, humidity } = res.data;
            if (temperature === "传感器数据读取失败" || humidity === "传感器数据读取失败") {
              wx.showToast({
                title: '传感器数据读取失败',
                icon: 'none'
              });
            } else {
              this.setData({
                temperature: Number(temperature),  
                humidity: Number(humidity)  
              });
            }
          } else {
            wx.showToast({
              title: '请求失败',
              icon: 'none'
            });
          }
        },
        fail: (err) => {
          wx.showToast({
            title: '请求失败',
            icon: 'none'
          });
        }
      });
    },
    onUnload: function() {
      // 页面卸载时清除定时器
      clearInterval(this.dataUpdateInterval);
    }
  })