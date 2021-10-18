<template >
  <div>
    <h1>Children1</h1>

    <button @click="test">test</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    test() {
      console.log("Тэст");
      axios.post("http://localhost:3001/test");
    },
  },
  //добавил комментарии в новой ветке "tinymce"
};
</script>
<style>
</style>