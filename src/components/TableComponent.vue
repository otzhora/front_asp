<template>
  <div class="container">
    <!-- -->
    <div class="create_user">
      <label for="create-name">Имя:</label>
      <input type="text" name="create_name" v-model="name">

      <label for="create-id">id:</label>
      <input type="text" name="create_id" v-model="id">

      <label for="create-name">Адрес:</label>
      <input type="text" name="create_adress" v-model="adress">

      <button v-on:click="createUser">Добавить пользователя</button>
    </div>

    <hr>

    <div class="delete_user">
      <label for="create-name">Введите id:</label>
      <input type="text" name="create_name" v-model="delete_id">

      <button v-on:click="deleteUser">Удалить пользователя</button>
    </div>
    <hr>

    <p v-if="err">{{err}}</p>
    <div class="user-container">
      <div class="user" v-for="user in users" v-bind:key="user.id">
        <p class="name">{{user.name}}</p>
        <p class="id">{{user.id}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../Posts";
export default {
  name: "TableComponent",
  data() {
    return {
      users: [],
      err: "",
      name: "",
      id: "",
      adress: "",
      delete_id: ""
    };
  },
  async created() {
    try {
      this.users = await Service.getUsers();
    } catch (err) {
      this.err = err.message;
    }
  },
  methods: {
    async createUser() {
      await Service.addUser({
        id: this.id,
        name: this.name,
        adress: this.adress
      });
      this.users = await Service.getUsers();
    },

    async deleteUser() {
      await Service.deleteUser(this.delete_id);
      this.users = await Service.getUsers();
    }
  }
};
</script>

<style>
div.container {
  margin: 0 auto;
}

div.user {
  display: flex;

  justify-content: space-around;
}
</style>
