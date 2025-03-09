<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import { computed } from 'vue';
import myBox from '../components/myBox.vue';
import myButton from '../components/myButton.vue';
const students = ref([{
  name: 'John',
  age: 20,
  sex: '男',
  area: '北京'
},
{
  name: 'Alice',
  age: 22,
  sex: '女',
  area: '上海'
},
{
  name: 'Bob',
  age: 21,
  sex: '男',
  area: '广州'
},
{
  name: 'Cathy',
  age: 23,
  sex: '女',
  area: '深圳'
}])
const delStu = (index) => {
  students.value.splice(index, 1)
}
const addStu = (newStudent) => {
  students.value.push(newStudent)
}
</script>

<template>
  <div class="app">
    <myBox :students="students" @del-stu="delStu"></myBox>
    <myButton @add-stu="addStu"></myButton>
  </div>
</template>
<style module>

</style>
