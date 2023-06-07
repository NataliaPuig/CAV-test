<script>
// import { useConfigStore } from '~/store/config';

// const configStore = useConfigStore()
export default {
  async asyncData({ params, redirect, error, $axios, $claims }) {
    const data = await fetch("https://bibliotech.bymotto.com/api/hubs")
      .then((res) => res.json())
      .then((data) => data.data);

    const homeConfig = await fetch("http://bibliotech.bymotto.com/api/config")
      .then((res) => res.json())
      .then((data) => data.data);
    const about = homeConfig.hide_about_us;
    const contact = homeConfig.hide_contact;
    const lang = homeConfig.languages_availables;
    const title = homeConfig.title;
    return { data, homeConfig, about, contact, lang, title };
  },

  methods: {
    async changeLang(item) {
      let response = await fetch(
        `http://bibliotech.bymotto.com/api/config/${item}`
      )
        .then((res) => res.json())
        .then((data) => data.data);
      this.title = response.title;
    },
  },
};
</script>

<template>
  <div>
    <nav>
      <ul>
        <li v-if="about"><RouterLink :to="'/about'">About us</RouterLink></li>
        <li v-if="contact">
          <RouterLink :to="'/contact'">Contact</RouterLink>
        </li>
        <li><RouterLink :to="'/filter'">Filtro</RouterLink></li>
      </ul>
      <ul>
        <li v-for="(item, i) in lang" :key="i" @click="changeLang(item)">
          {{ item }}
        </li>
      </ul>
    </nav>
    <br /><br />
    <h2>{{ title }}</h2>
    <br /><br />
    <div class="productContainer">
      <div class="product" v-for="(product, i) in data" :key="i">
        <RouterLink :to="`/details/${product.id}`">
          <div>
            {{ product.name }}
          </div>
        </RouterLink>
        <div v-html="product.description"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
}

ul {
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
}

li {
  margin-left: 1rem;
  list-style: none;
  cursor: pointer;
}
</style>
