// pages/temperature/temperature.js
Page({
    data: {
        temp: 0,
        tempStatus: '',
        tempAdvice: '',
        tempRange: [18, 26],
        isInRange: false
    },

    onLoad(options) {
        const temp = parseFloat(options.temp);
        this.setData({
            temp: temp
        });
        this.getTempStatusAndAdvice(temp);
    },

    getTempStatusAndAdvice(temp) {
        const [min, max] = this.data.tempRange;
        let status = '';
        let advice = '';
        let isInRange = false;

        if (temp < min) {
            status = '低温';
            advice = '当前温度较低，建议调高空调温度或开启取暖设备。';
        } else if (temp >= min && temp <= max) {
            status = '适宜';
            advice = '当前温度适宜，可保持当前状态。';
            isInRange = true;
        } else {
            status = '高温';
            advice = '当前温度较高，建议调低空调温度或开启风扇。';
        }

        this.setData({
            tempStatus: status,
            tempAdvice: advice,
            isInRange: isInRange
        });
    }
})  