<template>
  <div id="contentpage_bodyuslugi" class="body_img row">
    <div class="col">
      <p>kjlkjklkljk lkjljk</p>
    </div>
    <div class="pusto gt-sm"></div>
  </div>
</template>
<script>
import { onMounted } from "vue";
window.addEventListener("resize", function () {
  //console.log("изменение размера");
  var b = document.querySelector("#contentpage_bodyuslugi");
  if (b.offsetHeight < 600 || b.offsetWidth < 1023) {
    b.classList.remove("body_img");
  } else {
    b.classList.add("body_img");
  }
});
export default {
  setup() {
    // mounted
    onMounted(() => {
      console.log("Компонент примонтирован!");
      var b1 = document.querySelector("#contentpage_bodyuslugi");
      if (b1.offsetHeight < 600 || b1.offsetWidth < 1023) {
        b1.classList.remove("body_img");
      } else {
        b1.classList.add("body_img");
      }
    });
    return {};
  },
};
</script>
<style scoped>
.body_img {
  background-image: url(/img/11.png);
  background-attachment: scrool;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 30% auto;
}

#contentpage_bodyuslugi {
  background-color: #666666;

  min-height: calc(100vh - 100px);
  border: 0px solid red;
}
.pusto {
  width: 30%;
  border: 0px solid red;
}
/* .body_no_img {
  background-color: #666666;

  min-height: calc(100vh - 100px);
  border: 0px solid red;
} */
</style>