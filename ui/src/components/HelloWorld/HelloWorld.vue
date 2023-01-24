<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://v2.vuejs.org/">Vue 2</a>.
    </h3>
    <h3>{{ mockApiData }}</h3>
  </div>
</template>

<script>
import { axiosInstance } from "../../apis/axios-instance";

export default {
  name: "hello-world",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      mockApiData: {},
    };
  },
  async mounted() {
    console.log("hello-world mounted");
    const response = await axiosInstance.get("/user");
    this.mockApiData = response.data;
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
