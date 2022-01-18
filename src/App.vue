<template>
  <div id="nav">
    <header :list="getMenu"></header>
  </div>
  <div class="main">
    <router-view />
  </div>
</template>
<script>
import "@/assets/style/container.scss";
import { mapState, mapGetters, mapActions } from "vuex";
import Header from './components/Header.vue';
export default {
  components: { Header },
  computed: {
    ...mapState({}),
    ...mapGetters({
      getMenu: "menuStore/getMenu",
    }),
  },
  methods: {
    ...mapActions({
      loadMenusList: "menuStore/loadAllMenus",
    }),
  },
  mounted() {
    this.loadMenusList();
  },
};
</script>
<style lang="scss">
</style>
