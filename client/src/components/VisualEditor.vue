<template>
  <editor
    api-key="nyx85s6xtoknkbeeu3wi5431e0fqmcjltwzl14kygkydy1mo"
    :init="{
      language: 'ru',
      height: 300,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen media',
        'insertdatetime media table paste code help wordcount',
      ],
      toolbar:
        'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help media',
    }"
  />
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  props: {
    // editor: String,
  },
  name: "App",
  data() {
    return {};
  },
  components: {
    editor: Editor,
  },
};
</script>