<template>
  <div class="about">
    <h1>{{list}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [null]
    };
  },
  async created() {
    console.log("this,", this);
    let that = this;
    await this.$axios
      .get("/api/list")
      .then(function(response) {
        that.list = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>>
