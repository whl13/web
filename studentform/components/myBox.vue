<script setup>
import { ref } from 'vue'
const {students} = defineProps(['students'])
const emit = defineEmits(['delStu','addStu'])
const delStudent = (index)=>{
  emit('delStu', index);
}
</script>
<template>
  <div>
    <table>
      <caption>学生信息</caption>
      <thead>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>地区</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in students" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>{{ item.area  }}</td>
          <td><a href="#" @click.prevent="delStudent(index)">删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 80%;
  border-collapse: collapse;
  text-align: center;
}
caption {
  font-size: 24px;
  font-weight: 700;
}
th,td {
  border: 1px solid black;
}
</style>
