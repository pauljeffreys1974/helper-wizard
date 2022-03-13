<template>
    <div class="page-container">
        <h1 class="uppercase">Which Operating System are you using with your {{ this.$route.params.panel}}?</h1>
        <div class="operating-systems flex-mobile-column">
          <router-link :to="{name: 'checklist', params: {os: 'Windows'}}" class="operating-system">Windows</router-link>
          <router-link :to="{name: 'checklist', params: {os: 'iOS'}}" class="operating-system">iOS</router-link>
          <router-link :to="{name: 'checklist', params: {os: 'Android'}}" class="operating-system">Android</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OperatingSystem',
  props: {
    os: String
  }
}
</script>

<style scoped>
  .operating-systems {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

    .operating-system {
      font-size: 48px;
      margin: 0 20px;
      text-decoration: none;
      color: #555555;
  }

  @media only screen and (max-width: 768px) {
    .operating-system {
      width: 100%;
      text-align: center;
    } 
  }
</style>