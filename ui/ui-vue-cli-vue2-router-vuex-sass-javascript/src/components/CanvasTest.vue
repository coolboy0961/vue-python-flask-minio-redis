<template>
  <canvas
    ref="canvas"
    :width="width"
    :height="height"
    @click="handleClick"
  ></canvas>
</template>

<script>
import Vue from "vue";

export default Vue.component("CanvasTest", {
  data() {
    return {
      width: 300,
      height: 200,
    };
  },
  mounted() {
    // Get the canvas element reference
    this.canvas = this.$refs.canvas;

    // Get the drawing context
    this.ctx = this.canvas.getContext("2d");

    // Draw something on the canvas
    this.drawCircle(100, 100, 10);
    this.drawCircle(200, 100, 10);
  },
  methods: {
    drawCircle(x, y, radius) {
      // Draw a circle on the canvas
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.fill();
    },

    handleClick(event) {
      // Handle a mouse click on the canvas
      const rect = this.canvas.getBoundingClientRect();

      // Get the mouse position relative to the canvas
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Draw another circle at that position
      this.drawCircle(x, y, 10);
    },
  },
});
</script>
