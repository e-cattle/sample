<template>
  <router-view></router-view>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },
  localStorage: {
    user: {
      type: Object,
      default: {
        authenticated: false,
        id: 0,
        name: '',
        email: '',
        picture: '',
        language: '',
        timezone: ''
      }
    },
    synchronized: {
      type: Number,
      default: 0
    },
    token: {
      type: Object,
      default: {
        id: 0,
        pk: ''
      }
    },
    alwaysSync: {
      type: Boolean,
      default: true
    },
    iosTryInstall: {
      type: Boolean,
      default: true
    }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
