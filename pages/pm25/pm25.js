// pages/pm25/pm25.js
Page({
    data: {
        pm25: 0,
        pm25Status: '',
        pm25Advice: '',
        pm25Range: [0, 35],
        isInRange: false
    },

    onLoad(options) {
        const pm25 = parseFloat(options.pm25);
        this.setData({
            pm25: pm25
        });
        this.getPm25StatusAndAdvice(pm25);
    },

    getPm25StatusAndAdvice(pm25) {
        const [min, max] = this.data.pm25Range;
        let status = '';
        let advice = '';
        let isInRange = false;

        if (pm25 <= max) {
            status = '优';
            advice = '当前 PM2.5 浓度优秀，空气质量良好，可正常活动。';
            isInRange = true;
        } else if (pm25 > max && pm25 <= 75) {
            status = '良';
            advice = '当前 PM2.5 浓度良好，但仍需注意保持空气流通。';
        } else if (pm25 > 75 && pm25 <= 115) {
            status = '轻度污染';
            advice = '当前 PM2.5 浓度处于轻度污染，建议减少户外活动，开启空气净化器。';
        } else if (pm25 > 115 && pm25 <= 150) {
            status = '中度污染';
            advice = '当前 PM2.5 浓度处于中度污染，敏感人群应尽量留在室内。';
        } else {
            status = '重度污染';
            advice = '当前 PM2.5 浓度处于重度污染，所有人应避免户外活动，关闭门窗并开启空气净化器。';
        }

        this.setData({
            pm25Status: status,
            pm25Advice: advice,
            isInRange: isInRange
        });
    }
})    