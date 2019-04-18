<template>
  <div :class="`app-browser-mockup elevation-${elevation}`">
    <div class="app-browser-mockup-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elevation: {
      type: Number,
      required: false,
      default: 2
    }
  }
}
</script>

<style lang="scss">
/* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

.app-browser-mockup {
  border-top: 2em solid #f5f5f5;
  position: relative;
  border-radius: 6px;
  .app-browser-mockup-body > div {
    border-radius: 0 0 6px 6px;
  }
}

.app-browser-mockup:before {
  display: block;
  position: absolute;
  content: '';
  top: -1.25em;
  left: 1em;
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: #f44;
  box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
}
    
.app-browser-mockup.with-tab:after {
  display: block;
  position: absolute;
  content: '';
  top: -2em;
  left: 5.5em;
  width: 20%;
  height: 0em;
  border-bottom: 2em solid white;
  border-left: 0.8em solid transparent;
  border-right: 0.8em solid transparent;
}

.app-browser-mockup.with-url:after {
  display: block;
  position: absolute;
  content: '';
  top: -1.6em;
  left: 5.5em;
  width: calc(100% - 6em);
  height: 1.2em;
  border-radius: 2px;
  background-color: white;
}

.app-browser-mockup > * {
  display: block;
}

.app-browser-mockup {
  margin: 2em;
  flex: 1;
}

img {
  width: 100%;
}
</style>
