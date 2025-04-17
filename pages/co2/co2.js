// pages/co2/co2.js
Page({
    data: {
        co2: 0,
        co2Status: '',
        co2Advice: '',
        co2Range: [400, 1000],
        isInRange: false
    },

    onLoad(options) {
        const co2 = parseFloat(options.co2);
        this.setData({
            co2: co2
        });
        this.getCo2StatusAndAdvice(co2);
    },

    getCo2StatusAndAdvice(co2) {
        const [min, max] = this.data.co2Range;
        let status = '';
        let advice = '';
        let isInRange = false;

        if (co2 < min) {
            status = '异常低';
            advice = '二氧化碳浓度异常低，需检查检测设备是否正常。';
        } else if (co2 >= min && co2 <= max) {
            status = '正常';
            advice = '当前二氧化碳浓度正常，可保持良好通风。';
            isInRange = true;
        } else {
            status = '偏高';
            advice = '当前二氧化碳浓度偏高，建议打开窗户通风换气。';
        }

        this.setData({
            co2Status: status,
            co2Advice: advice,
            isInRange: isInRange
        });
    }
})  