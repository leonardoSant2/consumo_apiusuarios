<template>
  <div>
    <h1>LOGIN</h1>
    <hr>
    <div class="columns is-centered">
  <div class="column is-half">
    <div class="notification is-warning" v-if="error != undefined">
      <p>{{ error }}</p>
    </div>
    <p>E-mail</p>
    <input type="email" placeholder="email@email.com" class="input is-rounded is-primary" v-model="email">
    <p>Senha</p>
    <input type="password" placeholder="******" class="input is-rounded is-primary" v-model="password">
    <hr>
    <button class="button is-primary is-fullwidth" @click="login()">Entrar</button>
  </div>
</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      email: '',
      password: '',
      error: undefined
    }
  },
  methods:{
  login(){
    axios.post("http://localhost:8686/login", {
      email: this.email,
      password: this.password
    }).then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      this.$router.push({name: 'home'});
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