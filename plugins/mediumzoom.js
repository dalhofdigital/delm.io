import Vue from 'vue'
import mediumZoom from 'medium-zoom'

Vue.mixin({
  mounted () {
    mediumZoom('#content img:not(.medium-zoom-image):not(.no-zoom)')
  }
})
