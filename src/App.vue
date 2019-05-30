<template>
  <div id="app">
    <v-toolbar color="cyan" dark>
      <h1>Список пользователей</h1>
    </v-toolbar>

    <TableComponent/>
  </div>
</template>

<script>
import TableComponent from "./components/TableComponent";
export default {
  name: "App",
  components: { TableComponent },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
body {
  background-color: rgb(228, 238, 255);
}
</style>

