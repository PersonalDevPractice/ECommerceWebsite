<template>
  <div>
    <app-header></app-header>
    <div class="main-body-container">
      Body content
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './components/CustomHeader.vue';
import appFooter from './components/CustomFooter.vue';

export default {
  name: 'app',
  components: {
    appHeader: appHeader,
    appFooter: appFooter
  },
  data: function() {
    return {
      defaultValue: 'DefaultValues'
    }
  }
}
</script>

<style>
.main-body-container {
  padding: 15px;
}
</style>
