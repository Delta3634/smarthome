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
        this.startMockUpdate()
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
    },

    // 跳转到温度详情页面
    goToTemperaturePage() {
        wx.navigateTo({
            url: '/pages/temperature/temperature?temp=' + this.data.temp
        })
    },
    // 跳转到湿度详情页面
    goToHumidityPage() {
        wx.navigateTo({
           url: '/pages/humidity/humidity?humidity=' + this.data.humidity
        })
    },

// 跳转到二氧化碳详情页面
    goToCo2Page() {
        wx.navigateTo({
            url: '/pages/co2/co2?co2=' + this.data.co2
        })
    },
    // 跳转到 PM2.5 详情页面
    goToPm25Page() {
        wx.navigateTo({
            url: '/pages/pm25/pm25?pm25=' + this.data.pm25
        })
    },

// 跳转到光照详情页面
    goToLightPage() {
        wx.navigateTo({
            url: '/pages/light/light?light=' + this.data.light
        })
    }
})    

