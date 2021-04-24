<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
      possimus quo nihil, nemo fugiat accusamus libero eveniet, soluta enim
      numquam debitis repudiandae, qui facilis id alias quae consequuntur
      similique quasi.
    </p>
    <hr />
    <button @click="navigateToHome()" class="btn btn-primary">
      Go To Home
    </button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({name: 'home'});
    },
  },
};
</script>

<style scoped>
.btn {
  outline: none !important;
}
</style>
