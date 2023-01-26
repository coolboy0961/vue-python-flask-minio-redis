<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br />
    <h1 id="count-text" data-testid="count-text">count: {{ count }}</h1>
    <button
      id="increment-button"
      data-testid="increment-button"
      @click="incrementCount"
    >
      Count
    </button>
  </div>
</template>

<script>
export default {
  name: "about-view",
  computed: {
    count() {
      return this.$store.getters.count;
    },
  },
  methods: {
    incrementCount() {
      this.$store.dispatch("increment");
    },
  },
};
</script>
