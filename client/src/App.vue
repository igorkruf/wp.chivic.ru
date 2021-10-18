<template>
  <div class="row justify-center body_neksk">
    <popup v-if="PopupPrimerShow" @close="closePopupPrimer1()"> </popup>
    <ksk-news @visible_popup="vp"></ksk-news>
  </div>
</template>

<script>
import { ref } from 'vue';
import kskNews from './components/Raznoe/Newsksk66/Newsksk66.vue';
import popup from '@/components/Popup/Popup_service.vue';
export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const PopupPrimerShow = ref(false);
    const vp = () => {
      console.log('откроем модальное окно');
    };
    const showPopupPrimer1 = () => {
      console.log('показать попап');
      PopupPrimerShow.value = true;
      console.log(PopupPrimerShow.value);
    };
    const closePopupPrimer1 = () => {
      PopupPrimerShow.value = false;
      console.log(PopupPrimerShow.value);
    };
    return {
      leftDrawerOpen,
      showPopupPrimer1,
      closePopupPrimer1,
      PopupPrimerShow,
      vp,
      // toggleLeftDrawer() {
      //   leftDrawerOpen.value = !leftDrawerOpen.value;
      // },
    };
  },
  components: {
    kskNews,
    popup: popup,
  },
};
</script>
<style>
.body_neksk {
  box-sizing: border-box;
  background-color: #e9e9e9;
  min-height: 100vh;
}
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

/* анимация переходы */
/* ///////////////////////////// */
.prozrachnost-enter-active,
.prozrachnost-leave-active {
  transition: opacity 1s;
}

.prozrachnost-enter-from,
.prozrachnost-leave-to {
  opacity: 0;
}
.prozrachnost-enter-to,
.prozrachnost-leave-from {
  opacity: 1;
}
/* /////////////////////////// */
/* ///////////////////////////// */
/* .prozrachnost_razmer-enter-active,
.prozrachnost_razmer-leave-active {
  transition: opacity 5s linear;
}

.prozrachnost_razmer-enter-from,
.prozrachnost_razmer-leave-to {
  opacity: 0;
}
.prozrachnost_razmer-enter-to,
.prozrachnost_razmer-leave-from {
  opacity: 1;
} */
/* /////////////////////////// */
/* ///////////////////////////// */
.pr-enter-to,
.pr-leave-from {
  opacity: 1;
}
.pr-enter-active,
.pr-leave-active {
  transition: opacity 0.7s ease;
}

.pr-enter-from,
.pr-leave-to {
  opacity: 0;
}

/* /////////////////////////// */
/* ///////////////////////////// */
.pr1-enter-to {
  opacity: 1;
}
.pr1-leave-from {
  opacity: 1;
}
.pr1-enter-active,
.pr1-leave-active {
  transition: all 1s ease-in-out;
}

.pr1-enter-from {
  opacity: 0;
}

.pr1-leave-to {
  opacity: 0;
}

/* /////////////////////////// */
/*//////////////////////////////*/
/* ///Анимация списка технологий// */
.list_ksknews-enter-to,
.list_ksknews-leave-from {
  opacity: 1;

  /* transform: rotate(360deg); */
}

.list_ksknews-enter-active,
.list_ksknews-leave-active {
  transition: all 300;
}

.list_ksknews-enter-from,
.list_ksknews-leave-to {
  opacity: 0;
}
</style>