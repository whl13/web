<template>
  <div>
{{ msg }}
  </div>
  <MyButton></MyButton>
</template>
<script>
  import MyButton from './compoments/MyButton.vue'
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      MyButton
    }
  }
</script>