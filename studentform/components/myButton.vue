<template>
  <div>
    <form @submit.prevent="addStudent">
      <div>
        <div>
          姓名：<input type="text" v-model="newStudents.name">
        </div>
        <div>
          年龄：<input type="number" min="1" v-model="newStudents.age">
        </div>
        <div>
          性别：<input type="radio" name="sex" value="男" v-model="newStudents.sex">男
                <input type="radio" name="sex" value="女" v-model="newStudents.sex">女
        </div>
        <div>
          地区：<input type="text" v-model="newStudents.area">
        </div>
        <input type="submit">
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['addStu'])
const newStudents = ref({
  name: '',
  age: '',
  sex: '',
  area:''
})
const addStudent = () => {
emit('addStu', {...newStudents.value})
newStudents.value = {
  name: '',
  age: '',
  sex: '',
  area:''
}
}
</script>
