// pages/light/light.js
Page({
    data: {
        light: 0,
        lightStatus: '',
        lightAdvice: '',
        lightRange: [300, 1000],
        isInRange: false
    },

    onLoad(options) {
        const light = parseFloat(options.light);
        this.setData({
            light: light
        });
        this.getLightStatusAndAdvice(light);
    },

    getLightStatusAndAdvice(light) {
        const [min, max] = this.data.lightRange;
        let status = '';
        let advice = '';
        let isInRange = false;

        if (light < min) {
            status = '较暗';
            advice = '当前光照较暗，建议打开室内灯光。';
        } else if (light >= min && light <= max) {
            status = '适宜';
            advice = '当前光照适宜，可保持当前状态。';
            isInRange = true;
        } else {
            status = '过亮';
            advice = '当前光照过亮，可拉上窗帘或调整灯光亮度。';
        }

        this.setData({
            lightStatus: status,
            lightAdvice: advice,
            isInRange: isInRange
        });
    }
})    