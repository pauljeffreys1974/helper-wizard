<template>
    <div class="page-container">
        <h1 class="uppercase">CheckList for your {{ this.$route.params.os }} based {{ this.$route.params.panel }} Panel</h1>
        <div class="checklist-items flex-mobile-column">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CheckList'
}
</script>

<style scoped>
  .checklist-items {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
</style>