<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      width="300"
    >
      <v-list dense>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>fa-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Главная</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/news">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>fa-newspaper</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Обработанные запросы</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <router-link to="/domains">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>fa-cloud</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Обработка доменов</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

        <router-link to="/places">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>fa-globe</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Площадки</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>fa-mosque</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Места</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <router-link to="/contacts">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>fa-id-card</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>О системе</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>

      </v-list>
      <v-divider></v-divider>
      <v-card flat style="padding: 10px;
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

    </v-navigation-drawer>

    <v-app-bar
      app
      color="black"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/"><v-toolbar-title>"Молния" ГВЦ ВС РФ</v-toolbar-title></router-link>
      <v-spacer></v-spacer>


      Статус работы бота:

      <div v-if="isOnline && !isWork">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              icon
              @click.stop="isConfig = true"
            ><v-icon>fa-check</v-icon></v-btn>
          </template>
          <span>Запустить бота</span>
        </v-tooltip>
      </div>

      <div v-else-if="isOnline && isWork">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              icon
              @click="stopBot"
            ><v-icon>fa-search</v-icon></v-btn>
          </template>
          <span>Остановить бота</span>
        </v-tooltip>
      </div>
      <div v-else>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              icon
              disabled
            ><v-icon>fa-times</v-icon></v-btn>
          </template>
          <span>Бот не работает</span>
        </v-tooltip>
      </div>

      <div style="margin-right: 10px;">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              icon
              @click="checkBot"
            ><v-icon>fa-question</v-icon></v-btn>
          </template>
          <span>Проверить статус бота</span>
        </v-tooltip>
      </div>

    <div v-if="!isLoggedIn">
      <v-btn
        dark
        @click.stop="dialog = true"
      >
        Войти
      </v-btn>

      <v-dialog
        v-model="dialog"
        max-width="390"
      >
        <v-card>
        <v-card-title class="headline">Войти в систему</v-card-title>

        <v-form>
          <v-container>

                <v-text-field
                  v-model="email"
                  :counter="30"
                  label="Email"
                  required
                ></v-text-field>

                <v-text-field
                  type="password"
                  v-model="password"
                  :counter="20"
                  label="Пароль"
                  required
                ></v-text-field>

          </v-container>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Закрыть
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="login(); dialog = false"
          >
            Войти
          </v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>

    </div>

    <div v-else>
      <router-link
        to="/user">
          {{ user.email }}
      </router-link>
      <v-btn
        dark
        @click.stop="logout"
      >
        Выйти
      </v-btn>
    </div>

    <v-dialog
        v-model="isConfig"
        max-width="550"
      >
        <v-card>
        <v-card-title class="headline">Параметры запуска бота</v-card-title>

        <v-form>
          <v-container>

            <v-text-field
              v-model="query"
              :counter="30"
              label="Запрос"
              required
            ></v-text-field>

            <v-text-field
              v-model="pages"
              hide-details
              single-line
              type="number"
              placeholder="Количество страниц"
            />

            <v-select
              v-model="engine"
              style="margin-top:20px;"
              :items="engines"
              label="Поисковая система"
              solo
            ></v-select>

          </v-container>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="isConfig = false"
          >
            Закрыть
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="auto = false; startBot(); isConfig = false"
          >
            Начать поиск
          </v-btn>
          <v-divider></v-divider>
          <v-btn
            color="green darken-1"
            text
            @click="auto = true; startBot(); isConfig = false;"
          >
            Начать поиск автоматически
          </v-btn>

        </v-card-actions>
        </v-card>
      </v-dialog>

    </v-app-bar>

    <v-main>
      <v-container
      >
        <router-view />
      </v-container>
    </v-main>
    <v-footer
      color="black"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>

    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'

  export default {

    components: {
    },

    props: {
      source: String,
    },
    data () {
      return {
        dialog: false,
        isConfig: false,
        auto: false,
        isLoggedIn: false,
        drawer: false,

        isOnline: false,
        isWork: false,

        valid: false,
        password: '',

        email: '',

        engines: ['Yandex.News', 'Rambler.News', 'Google.News'],
        engine: '',
        pages: 0,
        query: '',
      }
    },

    async mounted() {

      if(localStorage.getItem('user') === null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true
        this.user.email = JSON.parse(localStorage.getItem('user')).email
      }
    },

    async created() {
      await this.checkBot()
    },

    computed: {
      user: function() {
          return this.$store.getters.getUser;
      },
    },

    methods: {
      async checkBot() {
          try {
            await axios.get('http://127.0.0.1:4000/check')
            .then(response => {
              if(response.data.status == "Waiting") {
                this.isWork = false;
                this.isOnline = true;
              }
              else {
                this.isOnline = true;
                this.isWork = true;
              }
            })
          } catch (err) {
              this.isWork = false
              this.isOnline = false;
          }
      },

      async login() {
          let email = this.email
          let password = this.password
          if (await this.$store.dispatch('login', { email, password })) {
            this.isLoggedIn = true
            this.$fire({
              title: "Уведомление",
              text: "Вы успешно вошли",
              type: "success",
              timer: 2000
            });
          }
      },

      async logout() {

        this.$confirm("Вы точно хотите выйти?").then(() => {
          this.$store.dispatch('logout')
          this.isLoggedIn = false

          this.$fire({
            title: "Уведомление",
            text: "Вы успешно вышли",
            type: "success",
            timer: 2000
          });

        });
      },

      async startBot() {
        console.log(this.auto)
        if (this.auto == true) {
          await axios.get('http://127.0.0.1:4000/start')
          .then(async res => {
            console.log(res)
            this.overlay = false
            this.isWork = true
            console.log("Working")
            await this.$fire({
              title: "Уведомление",
              text: "Бот успешно запущен",
              type: "success",
              timer: 2000
            });
          })
          .catch(error =>  {
            console.log(error)
            this.$fire({
              title: "Уведомление",
              text: "Бот не запущен!",
              type: "error",
              timer: 2000
            });
          })
        }
        else {
          console.log("С параметрами")
          await axios.post('http://127.0.0.1:4000/start', {
            pages: this.pages,
            query: this.query,
            engine: this.engine
          })
          .then(res => {
            console.log(res)
            this.isWork = true
            this.overlay = false
            this.pages = ''
            this.query = ''
            this.engine = ''
          })
        }
      },

      async stopBot() {
        await axios.get('http://127.0.0.1:4000/stop')
        .then(res => {
          console.log(res)
          this.isWork = false
        })
      }
    }
  }
</script>

<style>

* {
  text-decoration: none !important;
}
</style>
