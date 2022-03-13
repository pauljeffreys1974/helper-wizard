<template>
  <router-view />
  <br /><br /><br /><br />
  <hr />
  <router-link to="/">Home</router-link>
</template>

<style>
  #app {
    font-family: proxima nova rg,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #555555;
    margin: 40px 20px;
    padding: 0;
  }

  .uppercase {
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    .flex-mobile-column {
      flex-direction: column;
    }
  }
</style>
