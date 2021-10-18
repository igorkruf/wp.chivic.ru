<template>
  <div>
    <div class="row header">
      <div class="col-auto q-pa-lg self-center column lt-sm">
        <!-- <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" /> -->
        <q-btn flat @click="$emit('toggle_drawer')" round dense icon="menu" />
      </div>
      <div class="row col no-wrap justify-between bbb">
        <div class="row q-ml-lg q-pb-sm content-end q-gutter-sm gt-xs hm">
          <q-btn flat label="Homepage" />
          <q-space />
          <q-tabs v-model="tab">
            <q-route-tab
              class="col-auto q-pa-sm"
              to="/uslugi"
              label="Услуги"
              exact
            />
            <q-tab
              class="col-auto q-pa-sm"
              name="articles"
              label="Технологии"
            />
          </q-tabs>
        </div>

        <div class="column q-px-sm justify-around q-ma-md col hk">
          <div><q-icon name="phone" /> 8(902)-264-69-69</div>
          <div><q-icon name="alternate_email" /> igor-kruf@list.ru</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      tab: ref(null),
    };
  },
};
</script>
<style>
.header {
  background-color: #8b7b78;
  min-height: 100px;
}
.header > div {
  border: 0px solid #fff;
}
.hm > div {
  border: 0px solid green;
}
.bbb > div {
  border: 0px solid green;
}
.hk {
  text-align: right;
}
</style>