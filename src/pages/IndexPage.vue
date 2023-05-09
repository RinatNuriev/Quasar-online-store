<template>
  <div class="" style="width: 100%; height: 100%">
    <h3 class="q-ma-xl text-blue-grey-1 greetingText">Welcome to myShop</h3>
    <div class="q-video">
      <video
        src="../../public/video.mp4"
        loop
        preload
        autoplay
        muted="muted"
        style="width: 100%; height: 100%"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
.greetingText {
  position: absolute;
  z-index: 11;
}
</style>
