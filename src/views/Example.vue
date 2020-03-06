<template>
  <div class="home">
    <CadastroFazenda></CadastroFazenda>
    <DataListComponent></DataListComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import CadastroFazenda from '@/components/AddFarmComponent.vue'
import DataListComponent from '@/components/DataListComponent.vue'

export default {
  name: 'home',
  components: {
    CadastroFazenda,
    DataListComponent
  }
}
</script>
