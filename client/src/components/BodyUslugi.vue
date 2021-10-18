
<template>
  <div id="contentpage_services" class="row items-start">
    <!-- <transition name="pr"> -->
    <popup v-if="PopupPrimerShow" @close="closePopupPrimer1()"> </popup>
    <!-- </transition> -->
    <div class="ul_menu col-4">
      <div
        v-for="(service, i) in spisokservices"
        :key="i"
        @click="select_service(service._id, i)"
      >
        {{ service.nameService }}
      </div>
    </div>

    <div class="col-8">
      <transition name="pr" mode="out-in">
        <div :key="selected_service">
          <div v-html="selected_service.aboutService" class="border" />
          <button class="show_popup_primer" @click="showPopupPrimer1">
            Примеры работ
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import popup from "@/components/Popup/Popup_service.vue";
//import Service from "@/components/Uslugi/Usluga.vue";

export default {
  setup() {
    axios.get("http://localhost:3001/admin/spisokservices", {}).then((res) => {
      console.log(res.data);
      spisokservices.value = res.data;
    });
    const PopupPrimerShow = ref(false);
    const showPopupPrimer1 = () => {
      console.log("показать попап");
      PopupPrimerShow.value = true;
      console.log(PopupPrimerShow.value);
    };
    const closePopupPrimer1 = () => {
      PopupPrimerShow.value = false;
      console.log(PopupPrimerShow.value);
    };

    const spisokservices = ref(null);
    const selected_service = ref([]);

    const select_service = (j, n) => {
      var ii = n;
      let npm = document.querySelectorAll(".ul_menu>div");
      npm.forEach((element) => {
        if (element.classList.contains("active")) {
          element.classList.remove("active");
        }
        npm[ii].classList.add("active");
      });

      selected_service.value = spisokservices.value.find(
        (item) => item._id == j
      );
    };

    return {
      spisokservices,
      select_service,
      selected_service,
      showPopupPrimer1,
      closePopupPrimer1,
      PopupPrimerShow,
    };
  },
  components: {
    //Service: Service,
    popup: popup,
  },
};
</script>
<style scoped>
.body_img {
  background-image: url(/img/22.png);
  background-attachment: scrool;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 30% auto;
}

#contentpage_services {
  background-color: #666666;

  min-height: calc(100vh - 100px);
  border: 0px solid red;
}
.border {
  border: 0px solid green;
}
.pusto {
  width: 30%;
  border: 0px solid red;
}

.ul_menu {
  border: 0px solid red;
  min-height: calc(100vh - 100px);
  padding: 10px;
  background-color: #8b7b78;
}
.ul_menu > div {
  color: #ffffff;
  border-left: 2px solid #8b7b78;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.ul_menu > div:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.ul_menu > .active {
  border-left: 2px solid #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: default;
}

/* .body_no_img {
  background-color: #666666;

  min-height: calc(100vh - 100px);
  border: 0px solid red;
} */
</style>