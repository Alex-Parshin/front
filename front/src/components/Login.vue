<template>
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
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        password: '',
        email: ''
      }
    },
  }
</script>