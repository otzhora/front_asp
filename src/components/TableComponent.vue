<template>
  <div class="container">
    <!-- -->
    <v-app id="inspire">
      <div class="create_user">
        <label for="create-name">Имя:</label>
        <input type="text" name="create_name" v-model="name">

        <label for="create-id">id:</label>
        <input type="text" name="create_id" v-model="id">

        <label for="create-name">Адрес:</label>
        <input type="text" name="create_adress" v-model="adress">

        <v-btn flat small v-on:click="createUser">Добавить пользователя</v-btn>
      </div>

      <hr>

      <div class="delete_user">
        <label for="create-name">Введите id:</label>
        <input type="text" name="create_name" v-model="delete_id">

        <v-btn flat small v-on:click="deleteUser">Удалить пользователя</v-btn>
      </div>
      <hr>

      <p v-if="err">{{err}}</p>

      <v-data-table :headers="headers" :items="users">
        <template sclot="headerCell" slot-scope="props">
          <span>{{props.header.text}}</span>
        </template>
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.id }}</td>
        </template>
      </v-data-table>
    </v-app>
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
      delete_id: "",
      headers: [{ text: "name" }, { text: "id" }]
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
