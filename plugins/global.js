import Vue from 'vue'
import mediumZoom from 'medium-zoom'

Vue.mixin({
  mounted () {
    mediumZoom('.docs img:not(.medium-zoom-image)')
  }
})
