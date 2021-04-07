<template>
  <div class="home"></div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      axios
        .get("/api/list")
        .then(function (response) {
          this.list = Array.from(response.data);
          console.log(this.list);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
