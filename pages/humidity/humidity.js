// pages/humidity/humidity.js
Page({
    data: {
        humidity: 0,
        humidityStatus: '',
        humidityAdvice: '',
        humidityRange: [40, 60],
        isInRange: false
    },

    onLoad(options) {
        const humidity = parseFloat(options.humidity);
        this.setData({
            humidity: humidity
        });
        this.getHumidityStatusAndAdvice(humidity);
    },

    getHumidityStatusAndAdvice(humidity) {
        const [min, max] = this.data.humidityRange;
        let status = '';
        let advice = '';
        let isInRange = false;

        if (humidity < min) {
            status = '干燥';
            advice = '当前湿度较低，建议使用加湿器增加空气湿度。';
        } else if (humidity >= min && humidity <= max) {
            status = '适宜';
            advice = '当前湿度适宜，可保持当前状态。';
            isInRange = true;
        } else {
            status = '潮湿';
            advice = '当前湿度较高，建议开启除湿器降低空气湿度。';
        }

        this.setData({
            humidityStatus: status,
            humidityAdvice: advice,
            isInRange: isInRange
        });
    }
})   