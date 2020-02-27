<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent :max-width="widthDialog">
      <template v-slot:activator="{ }">
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                :label="content.body"
                v-model="body"
                required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="action">fechar</v-btn>
          <v-btn color="blue darken-1" text @click="action">salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'dialog-option-save',
  props: {
    dialog: Boolean,
    maxwidth: Number,
    content: Object
  },
  data () {
    return {
      widthDialog: typeof this.maxwidth === 'number' && this.maxwidth > 100 ? this.maxwidth + 'px' : '600px',
      title: this.content.title,
      body: this.content.body,
      dialogState: this.dialog
    }
  },
  methods: {
    action () {
      this.dialogState = !this.dialogState
      this.$emit('getFillBody', this.body)
    }
  }
}
</script>

<style>
</style>
