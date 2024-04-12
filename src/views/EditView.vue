<template>
    <div>
      <h1>EDIÇÃO DE USUÁRIOS</h1>
      <hr>
      <div class="columns is-centered">
    <div class="column is-half">
      <div class="notification is-warning" v-if="error != undefined">
        <p>{{ error }}</p>
      </div>
      <p>Nome</p>
      <input type="text" placeholder="Nome do Usuário" class="input is-rounded is-primary" v-model="name">
      <p>E-mail</p>
      <input type="email" placeholder="email@email.com" class="input is-rounded is-primary" v-model="email">
      <hr>
      <button class="button is-primary is-fullwidth" @click="edit()">Salvar</button>
    </div>
  </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    created(){

        var req = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }
        axios.get("http://localhost:8686/user/" + this.$route.params.id, req).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err.response);
            this.$router.push({name: 'users'});
        })
    },
    data(){
      return{
        name: '',
        email: '',
        error: undefined
      }
    },
    methods:{
    edit(){
      axios.put("http://localhost:8686/user", {
        name: this.name,
        email: this.email
      }).then(res => {
        console.log(res);
        this.$router.push({name: 'users'})
      }).catch(err => {
        var msgErro = err.response.data;
        this.error = msgErro;
      })
    }
    }
  }
  </script>
  
  <style>
  
  </style>