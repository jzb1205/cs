<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <form action="">
        <input type="text">
        <button type="submit">搜索</button>
      </form>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
form{
  display: flex;
  input,button{
    outline: none;
    align-items: center;
  }
  input{
    flex-grow: 1;
  }
  button{
    height:70px;
  }
}
</style>
