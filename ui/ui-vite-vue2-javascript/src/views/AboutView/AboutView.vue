<template>
  <div class="about">
    <div>
      <h1>This is an about page</h1>
      <br />
      <h1 id="count-text" data-testid="count-text">
        count: {{ counterStore.counter }}
      </h1>
      <button
        id="increment-button"
        data-testid="increment-button"
        @click="incrementCount"
      >
        Count
      </button>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useCounterStore } from "@/stores/counter.js";

export default {
  name: "about-view",
  computed: {
    ...mapStores(useCounterStore),
  },
  methods: {
    incrementCount() {
      this.counterStore.increment();
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
