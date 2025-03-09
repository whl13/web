<script setup>
import componentA from "./components/componentA.vue";
import componentB from "./components/componentB.vue";
</script>

<template>
  <div>
    <componentA><template #header>1111</template></componentA>
    <componentB></componentB>
  </div>
</template>
