<template>
    <div class="page-container">
        <h1 class="uppercase">{{ this.$route.params.user}} Panel Options</h1>
        <div class="panel-types flex-mobile-column">
          <router-link :to="{name: 'operatingsystem', params: {panel: '6000K+'}}" class="panel-type">6000K+</router-link>
          <router-link :to="{name: 'operatingsystem', params: {panel: '7000XE'}}" class="panel-type">7000XE</router-link>
          <router-link :to="{name: 'operatingsystem', params: {panel: '8086MAX'}}" class="panel-type">8086MAX</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PanelType',
  props: {
    panel: String
  }
}
</script>

<style scoped>
  .panel-types {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

    .panel-type {
      font-size: 48px;
      margin: 0 20px;
      text-decoration: none;
      color: #555555;
  }

    @media only screen and (max-width: 768px) {
      .panel-type {
        width: 100%;
        text-align: center;
      } 
    }
</style>