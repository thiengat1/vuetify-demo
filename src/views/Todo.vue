<!--
 * @Description: 
 * @Author: Lewis
 * @Date: 2020-11-20 02:50:18
 * @LastEditTime: 2020-11-25 02:57:41
 * @LastEditors: Lewis
-->
<template>
  <div class="home">
    <v-list class="pt-0" flat>
      <v-text-field
      @click:append="addTask"
      @keyup.enter="addTask"
      v-model="newTaskTitle"
        class="pa-3"
        outlined
        label="Add Task"
        append-icon="mdi-plus"
        hide-details
        clearable
      ></v-text-field>
      <div v-for="item in tasks" :key="item.id">
        <v-list-item
          @click="doneTask(item.id)"
          :class="{ 'blue lighten-5': item.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="item.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': item.done }"
                >{{ item.title }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click.stop="deleteTask(item.id)" icon>
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
// @ is an alias to /src
import {db} from '../firebase/db'
export default {
  name: "Todo",
  components: {},
  data() {
    return {
      newTaskTitle:'',
      tasks: [
      ],
    };
  },
  methods: {
    doneTask(id) {
     db.collection('tasks').doc(id).update({done:true})
    },
    deleteTask(id) {
      db.collection('tasks').doc(id).delete()
    },
   async addTask(){
     if(this.newTaskTitle){
       db.collection('tasks').add({title:this.newTaskTitle,done:false})
       this.newTaskTitle=''
     }
    }
  },
  firestore:{
    tasks:db.collection('tasks')
  }
};
</script>
