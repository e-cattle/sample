<template>
<v-content>
 <v-chip
  class="center-position-vertical white"
  style="padding: 0">
    <div class="mx-3">
      <div
      class="mx-auto index30"
      v-for="item in items" :key="item.action"
      style="padding: 10px 0">
        <v-btn
        small
        :elevation="2"
        @click="selectOption(item.action)">click
        </v-btn>
      </div>
    </div>
  </v-chip>

  <QRCode :state="viewQRCode" @getTokem="geTokem" @getError="getError"></QRCode>
</v-content>
</template>

<script>
import QRCode from '../components/qr_code_reader/QRCode'

const methods = {
  geTokem (object) {
    console.log(object)
    this.viewQRCode = false
  },
  getError (object) {
    console.log(object)
    this.viewQRCode = false
  },
  selectOption (action) {
    console.log('click')
    if (action === 'startQRCode') { this.viewQRCode = true }
  }
}

export default {
  name: 'data-app-x',
  components: {
    QRCode
  },
  data () {
    return {
      viewQRCode: false,
      dialogstartQRCode: false,
      items: [{ action: 'startQRCode' }]
    }
  },
  methods
// em, ch, mm
}
</script>

<style scoped>
  .about {
    background: brown;
    height: 300;
    position: relative;
  }
</style>
