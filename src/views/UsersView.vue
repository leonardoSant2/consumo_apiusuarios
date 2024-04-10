<template>
  <div>
    <h1>PAINEL ADMINISTRATIVO</h1>
      <table class="table">
          <thead>
            <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Ações</th>
            </tr>
          </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td v-if="user.role == 0">Usuário</td>
            <td v-if="user.role == 1">Administrador</td>
            <td><button class="button is-warning">Editar</button>|<button class="button is-danger">Deletar</button></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  created(){
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    axios.get("http://localhost:8686/user", req).then(res =>{
      console.log(res.data);
      var usersData = res.data
      this.users = usersData;
    }).catch(err => {
      console.log(err)
    })
  },
  data(){
    return {
      users: []
    }
  }
}
</script>

<style scoped>

</style>