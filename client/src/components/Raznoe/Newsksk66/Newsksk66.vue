<template>
  <div class="col-12 col-md-10 mmm">
    <div>источник: <a href="https://ksk66.ru">https://ksk66.ru</a></div>

    <transition-group name="list_ksknews" v-if="ksknews.length != 0">
      <q-card class="my-card news_single q-ma-sm" @click="showPopupPrimer1(ksknew.title.rendered, ksknew.content.rendered)" shadow bordered v-for="(ksknew, index) in ksknews" :key="index">
        <q-card-section>
          <q-card-section class="title_news" v-html="ksknew.title.rendered" />

          <q-card-section class="row wrap q-gutter-x-lg q-gutter-y-lg">
            <div class="col-12 col-md-3 flex flex-start">
              <q-img class="miniatura_news" :src="ksknew._embedded['wp:featuredmedia']['0'].source_url" />
            </div>

            <div class="col-11 col-md-8" v-html="ksknew.excerpt.rendered"></div>
            <!-- <q-card-section class="col-12 col-sm-3 flex flex-start">
              <q-img class="miniatura_news" :src="ksknew._embedded['wp:featuredmedia']['0'].source_url" />
            </q-card-section>
            <q-card-section class="col-12 col-sm-9" v-html="ksknew.excerpt.rendered" /> -->
          </q-card-section>
        </q-card-section>
      </q-card>
      <!-- <div class="news_single" v-for="(ksknew, i) in ksknews" :key="i" v-html="ksknew.excerpt.rendered" /> -->
    </transition-group>
    <div class="q-mx-sm q-pa-sm" v-else>
      <q-card class="col-12 col-md-10">
        <q-item>
          <q-item-section class="q-ma-lg">
            <q-item-label>
              <q-skeleton type="text" />
            </q-item-label>
            <q-item-label>
              <q-skeleton height="200px" class="q-my-md" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <popup v-if="PopupPrimerShow" @close="closePopupPrimer1()">
      <template v-slot:header>{{ title_popup }} </template>
      <template v-slot:body><div v-html="content_popup"></div></template>
      <template v-slot:footer>Footer</template>
    </popup>
  </div>
</template>

<script>
//import axios from 'axios';
import { ref } from 'vue';
import server from './server';
import popup from '@/components/Popup/Popup_service.vue';
export default {
  props: {
    // msg: String,
  },
  name: 'kskNews',
  setup() {
    const title_popup = ref(null);
    const content_popup = ref(null);
    const PopupPrimerShow = ref(false);
    const ksknews = ref([]);
    const showPopupPrimer1 = (title, content) => {
      console.log('показать попап');
      title_popup.value = title;
      content_popup.value = content;
      PopupPrimerShow.value = true;
      console.log(PopupPrimerShow.value);
    };
    const closePopupPrimer1 = () => {
      PopupPrimerShow.value = false;
      console.log(PopupPrimerShow.value);
    };

    return {
      showPopupPrimer1,
      closePopupPrimer1,
      PopupPrimerShow,
      title_popup,
      content_popup,
      ksknews,
    };
  },

  data() {
    return {
      // ksknews: [],
      //img_news_list: [],
    };
  },

  methods: {
    // get_miniature_news(id) {
    //   let response_miniature = server.get(`wp/v2/media/${id}`);
    //   console.log(response_miniature.data);
    //   return {
    //     response_miniature,
    //   };
    // },
  },
  components: {
    popup: popup,
  },
  async created() {
    //let response = await axios.get('https://ksk66.ru/wp-json/wp/v2/posts?_embed');
    //this.ksknews = response.data;
    let response = await server.get('wp/v2/posts?per_page=20&_embed=wp:featuredmedia');
    response.data.forEach((element, i) => {
      setTimeout(() => {
        if (element.title.rendered != '') {
          this.ksknews.push(element);
        }
      }, 500 * i);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.news_single {
  border: 0px solid red;
  text-align: justify;
}

.news_single:hover {
  cursor: pointer;
}
.miniatura_news {
  border: 0px solid red;
  width: 200px;
}
.title_news {
  text-align: left;
  border: 0px solid red;
  font-size: 18px;

  border-bottom: 1px solid #bdbdbd;
}
.mmm {
  position: relative;
}
</style>
