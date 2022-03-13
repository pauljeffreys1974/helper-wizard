<template>
  <div class="page-container">
    <h1 class="uppercase">Choose your user level</h1>
    <div class="educator-professional-choices flex-mobile-column">
      <router-link :to="{ name: 'panel', params: {user: 'Educators'}}" class="educator-professional-choice">Educator</router-link>
      <router-link :to="{ name: 'panel', params: {user: 'Professionals'}}" class="educator-professional-choice">Professional</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducatorOrProfessional',
  props: {
    userType: String
  }
}
</script>

<style scoped>
  .educator-professional-choices {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .educator-professional-choice {
      font-size: 48px;
      margin: 0 20px;
      text-decoration: none;
      color: #555555;
  }

  @media only screen and (max-width: 768px) {
    .educator-professional-choice {
      width: 100%;
      text-align: center;
    } 
  }
</style>
