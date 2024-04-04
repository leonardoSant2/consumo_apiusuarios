<template>
  <div>
    <h1>REGISTRO DE USUÁRIOS</h1>
    <hr>
    <div class="columns is-centered">
  <div class="column is-half">
    <p>Nome</p>
    <input type="text" placeholder="Nome do Usuário" class="input is-rounded is-primary" v-model="name">
    <p>E-mail</p>
    <input type="email" placeholder="email@email.com" class="input is-rounded is-primary" v-model="email">
    <p>Senha</p>
    <input type="password" placeholder="******" class="input is-rounded is-primary" v-model="password">
    <hr>
    <button class="button is-primary is-fullwidth" @click="register()">Cadastrar</button>
  </div>
</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      name: '',
      password: '',
      email: ''
    }
  },
  methods:{
  register(){
    axios.post("http://localhost:8686/user", {
      name: this.name,
      password: this.password,
      email: this.email
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err.response)
    })
  }
  }
}
</script>

<style>

</style>