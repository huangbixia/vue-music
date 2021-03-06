import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend() {
    // 请求地址
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

    // 参数
    const data = Object.assign({}, commonParams, {
        uin: 0,
        platform: 'h5',
        needNewCode: 1
    })
    
    return jsonp(url, data, options)
}