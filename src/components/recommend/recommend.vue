<template>
    <div class=recommend>
        <div class="recommend-content">
            <div class="slider-wrapper">
                <slider></slider>
            </div>
            <div class="recommend-list">
                <h1 class="list-title">热门歌单推荐</h1>
                <ul></ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
import Slider from 'base/slider/slider'

export default {
    components: {
        Slider
    },
    created() {
        this._getRecommend()
    },
    methods: {
        _getRecommend() {
            getRecommend().then((res) => {
                if (res.code === ERR_OK) {

                }
            })
        }
    }    
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 40%
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
</style>