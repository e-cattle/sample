<template>
  <v-app light>
    <v-container>
      <v-form ref="form" lazy-validation>
        <v-layout row wrap>
          <v-flex xs12 sm12 md12 lg4 xl4 class="px-2">
            <v-text-field v-model="form.farm" label="Fazenda" placeholder="Nome da fazenda" :rules="rules.farm" :counter="50"/>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6 class="px-2">
            <v-select :items="states()" item-text="name" item-value="uf" v-model="form.state" label="Estado" append-icon="map" cache-items :rules="rules.state" />
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6 class="px-2">
            <v-select :items="cities" v-model="form.city" label="Cidade" append-icon="location_on" :rules="rules.city" />
          </v-flex>
        </v-layout>
      </v-form>
        <v-btn dark primary @click.native="save">
          <v-icon></v-icon>
          Salvar
        </v-btn>
    </v-container>
  </v-app>
</template>

<script>
import brazil from '../assets/brazil.json'
import db from '../db.js'

export default {
  name: 'AddFarm',
  data () {
    return {
      form: {
        farm: '',
        state: '',
        city: ''
      },
      rules: {
        farm: [
          v => (v && v.trim().length > 0) || 'Insira o nome da propriedade!',
          v => (v && v.length <= 50) || 'A propriedade não pode ter mais de 50 caracteres!'
        ],
        state: [
          v => (v && v.trim().length > 0) || 'Selecione o estado em que a propriedade está localizada!'
        ],
        city: [
          v => (v && v.trim().length > 0) || 'Selecione a cidade em que a propriedade está localizada!'
        ]
      }
    }
  },
  methods: {
    store (evt) {
    },
    async save () {
      if (this.$refs['form'].validate()) {
        await db.AddFarmByForm(this.form)
      }
    },
    states () {
      return brazil.states.map(function (e) {
        return { 'name': e.name, 'uf': e.uf }
      })
    }
  },
  computed: {
    cities: function () {
      for (var i = 0; i < brazil.states.length; i++) {
        if (brazil.states[i].uf === this.form.state) {
          return brazil.states[i].cities
        }
      }

      return []
    }
  }
}
</script>

<style>
.v-text-field__prefix { margin-right: 10px }
</style>
