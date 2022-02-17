<template>
 <div id="app">
      <div id="nav">
        <h1>vuex 封装思路</h1>
        <p @click="$store.commit('add')">count：{{$store.state.count}}</p>
        <p @click="$store.dispatch('add')">异步 count:{{$store.state.count}}</p>
        <p>getters: {{$store.getters.getterCount}}</p>
      </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
