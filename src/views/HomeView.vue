<template>
  <div class="home">
      <av-line
          :line-width="2"
          line-color="lime"
          audio-src="./xuwei.mp3"
      ></av-line>

      <av-bars
          caps-color="#FFF"
          :bar-color="['#f00', '#ff0', '#0f0']"
          canv-fill-color="#000"
          :caps-height="2"
          audio-src="./xuwei.mp3"
      ></av-bars>

      <av-circle
          :outline-width="0"
          :progress-width="5"
          :outline-meter-space="5"
          :playtime="true"
          playtime-font="18px Monaco"
          audio-src="./xuwei.mp3"
      ></av-circle>

      <av-waveform
          audio-src="./xuwei.mp3"
      ></av-waveform>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
