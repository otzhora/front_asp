<template>
  <div id="app">
    <h1>Список пользователей</h1>
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
