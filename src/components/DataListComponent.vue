<template>
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <!-- <v-data-table :headers="headers" :items="farms" :items-per-page="5" class="elevation-1" @click:row="handleClick"> -->
        <v-data-table :headers="headers" :items="farms" :items-per-page="5" class="elevation-1">
          <template v-slot:top>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon big class="mr-6" @click="selecionaFazenda(item)">
              mdi-arrow-right
            </v-icon>
            <v-icon big @click="deletaFazenda(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import db from '../db.js'

export default {
  name: 'DataListComponent',
  data () {
    return {
      headers: [
        {
          text: 'Nome Fazenda',
          align: 'start',
          value: 'farm'
        },
        {
          text: 'Estado',
          value: 'state'
        },
        {
          text: 'Ações',
          value: 'action',
          sortable: false
        }
      ],
      farms: []
    }
  },
  async created () {
    await this.init()
  },
  methods: {
    async init () {
      this.farms = await db.queryFarms()
    },
    handleClick (value) {
      console.log(value.farm)
    },
    async deleteFarm (value) {
      await db.deleteById(value.id)
      await this.init()
    },
    selectFarm (value) {
      console.log(value)
    }
  }
}
</script>

<style>
  tr.v-data-table__selected {
    background: #7d92f5 !important;
  }
</style>
