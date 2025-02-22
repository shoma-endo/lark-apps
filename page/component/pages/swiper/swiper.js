import i18n from '../../../i18n/index'
const swiper = i18n.swiper

Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    ...swiper
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  changeVertical: function (e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  intervalChanging: function (e){
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e){
    this.setData({
      duration: e.detail.value
    })
  },
  durationChanging: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  currentChange: function (e) {
    console.log(e)
  }
})
