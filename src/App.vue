<template>
  <div id="app">
    <div id="nav" v-show="false">
      <router-link to='/'><img src="@/assets/img/logo_with_text.png"></router-link>
      <router-link to="/inventory">inventory</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

  .noSelect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .btn {
    display: flex;
    margin: auto;
    padding: calc(0.08em + 1px) 0.8em 0.08em 0.8em;
    transition: all 0.3s ease;
    line-height: 1;
    text-align: center;
    font-weight: 100;
    border-radius: 0;
    text-decoration: none;

    &:hover {
      transition: all 0.3s ease;
      cursor: pointer;
    }
  }

  .btn-black {
    color: white;
    background: #171616;
    border: 2px solid #171616;

    &:hover {
      color: #171616;
      background: white;
    }
  }

  .btn-red {
    color: #fdfdfd;
    background: #d05152;
    border: 2px solid #d05152;

    &:hover {
      color: black;
      background: #fdfdfd;
    }
  }

  .btn p {
    margin: 2px auto;
    text-align: center;
    line-height: 1;
  }

  .btn-send {
    color: #fdfdfd;
    background: #f82425;
    border: 2px solid #f82425;
    width: calc(100% - 4px);
    padding: 15px 0;

    span {
      width: 100%;
    }

    &:hover {
      color: black;
      background: #fdfdfd;
    }
  }
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

body {
  margin: 0;
}

html {
  font-size: 32px;
}
</style>
