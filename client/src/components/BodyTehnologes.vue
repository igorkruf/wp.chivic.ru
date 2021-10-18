
<template>
  <div id="contentpage_tehnologes" class="row justify-start q-pa-lg">
    <transition-group name="list_tehnologes">
      <q-card class="card_tehnologe" v-for="(tehnologe, i) in spisoktehnologes_display" :key="i">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div>{{ tehnologe.nameTehnologe }}</div>
        </q-card-section>
      </q-card>
    </transition-group>
  </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';
//import popup from '@/components/Popup/Popup_service.vue';
//import Service from "@/components/Uslugi/Usluga.vue";

export default {
  setup() {
    axios
      .get('http://localhost:3001/admin/spisoktehnologes', {})
      .then((res) => {
        spisoktehnologes.value = res.data;
      })
      .then(() => {
        // spisoktehnologes.value.forEach(async (element) => {
        add_spisoktehnologes_display();
        // });
      });

    const spisoktehnologes = ref(null);
    const spisoktehnologes_display = ref([]);
    const add_spisoktehnologes_display = () => {
      spisoktehnologes.value.forEach((tehnologe, i) => {
        setTimeout(() => {
          spisoktehnologes_display.value.push(tehnologe);
        }, 500 * i);
      });
    };

    return {
      spisoktehnologes,
      spisoktehnologes_display,
      add_spisoktehnologes_display,
    };
  },

  components: {
    //Service: Service,
    // popup: popup,
  },
};
</script>
<style scoped>
#contentpage_tehnologes {
  background-color: #666666;

  min-height: calc(100vh - 100px);
  border: 1px solid red;
}
.card_tehnologe {
  width: 300px;
  height: 400px;
  margin: 10px;
  border: 0px solid green;
}
</style>