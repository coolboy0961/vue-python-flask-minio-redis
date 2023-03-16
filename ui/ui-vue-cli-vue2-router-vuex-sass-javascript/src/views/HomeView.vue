<template>
  <div>
    <hello-world />
    <canvas-test />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import CanvasTest from "@/components/CanvasTest.vue";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
    CanvasTest,
  },
};
</script>
