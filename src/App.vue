<template>
  <div id="nav">
    <Header :list="menu"></Header>
  </div>
  <div class="main">
    <router-view />
  </div>
</template>
<script>
import "@/assets/style/container.scss";
import { mapState, mapGetters, mapActions } from "vuex";
import Header from "./components/Header.vue";
export default {
  components: { Header },
  computed: {
    ...mapState({}),
    ...mapGetters({
      getMenu: "menuStore/getMenu",
    }),
    menu(){
      return this.getMenu('header_menu')
    }
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
