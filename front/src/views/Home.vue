<template>
  <div class="home">
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <h2>Последние новости</h2>

    <v-row>
      <v-col md="4" sm="6" xs="12">
        <v-card>
          <v-img 
          src="https://dummyimage.com/600x400/000/fff"
          ></v-img>
          <v-card-title>
            Заголовок
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius vel pharetra vel turpis. Cras ornare arcu dui vivamus arcu. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. In arcu cursus euismod quis viverra nibh cras. Urna id volutpat lacus laoreet non. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui.
          </v-card-text>
          <v-card-actions>
            <v-btn text color="black">
              Открыть
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4" sm="6" xs="12">
        <v-card>
          <v-img 
          src="https://dummyimage.com/600x400/000/fff"
          ></v-img>
          <v-card-title>
            Заголовок
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius vel pharetra vel turpis. Cras ornare arcu dui vivamus arcu. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. In arcu cursus euismod quis viverra nibh cras. Urna id volutpat lacus laoreet non. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui.
          </v-card-text>
          <v-card-actions>
            <v-btn text color="black">
              Открыть
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-divider style="margin-top: 20px; margin-bottom:20px;"></v-divider>
    <v-card style="padding: 10px;
    width: 450px;">
    <p>Всего новостей в базе: {{ getNewsCount }}
    <p>Всего доменов в базе: {{ getDomainsCount }}
    <p>Аптайм: {{ uptime }} секунд
    <p>Новостей получено за аптайм: {{ newsCount }}

    <!-- <p>Капча: {{ captchaCount }} -->
    <!-- Всего доменов: {{ count }} -->
    
    <div style="margin-top: 20px;">
      <v-btn text style="margin-right: 10px;" @click="updateNews">Обновить статистику</v-btn>

      <v-btn text @click="dialog = true">Настроить бота</v-btn>
    </div>
  </v-card>

    <SetBot />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import axios from 'axios'
import SetBot from './../components/SetBot'
export default {

  components: {
    SetBot
  },

  data() {
    return {
      overlay: false,
      isLoaded: false,
      dialog: false,

      uptime: 0,
      newsCount: 0,
      captchaCount: 0,

      ySel: {
        title: '',
        description: '',
        agency: '',
        date: ''
      },

      rSel: {
        title: '',
        description: '',
        agency: '',
        date: ''
      },

      gSel: {
        title: '',
        description: '',
        agency: '',
        date: ''
      }
    }
  },

  watch: {
    overlay (val) {
      this.isLoaded && val && setTimeout(() => {
        this.overlay = false
      }, 1000)
    },
  },

  methods: {
    ...mapActions(['allNews', 'allDomains']),
  	async updateNews() {
  		await this.allNews()
      await this.allDomains()
      await this.updateBot()
    },

    async updateBot() {
      await axios.get('http://127.0.0.1:4000/check')
      .then(res => {
        console.log(res)
        this.uptime = res.data.workTime || 0
        this.newsCount = res.data.newsCount || 0
        // this.captchaCount = res.data.captchaCount.captcha || 0
      })
    },

    async updateConfig() {

      await axios.post('http://127.0.0.1:4000/updateConfig', {yandex: this.ySel, rambler: this.rSel, google: this.gSel})
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    } 
  },

  computed: mapGetters(['getNewsCount', 'getDomainsCount']),

  async created() {
  	await this.updateNews()
  }
}
</script>
