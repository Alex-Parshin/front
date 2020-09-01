<template>
	<div>
		<v-alert type="success" v-if="isLoaded">
			    Новости загружены!
			    <v-btn @click="updateNews">Обновить</v-btn>
		</v-alert>

		<v-alert type="error" v-else>
			    Новости не загружены!
			    <v-btn @click="updateNews">Попробовать еще</v-btn>
		</v-alert>

		  <v-card>

		    <v-data-table
		      :headers="headers"
		      :items="getNews"
		      :search="search"
		    >
          <template v-slot:item.url="{ item }">
            <a :href="item.href" target="_blank">Открыть</a>
          </template>

		    </v-data-table>

		  </v-card>
	</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

  export default {

  	async created() {
  		if(await this.updateNews()) {
  			this.isLoaded = true
  		}
  	},

  	computed: mapGetters(['getNews']),

  	methods: {
  		...mapActions(['allNews']),
  		async updateNews() {
  			this.isLoaded = await this.allNews()
  			console.log(this.isLoaded)
  		}
  	},

    data () {
      return {

      	href: "localhost",
      	news: [],

        search: '',
        headers: [
        {text: 'Запрос', value: 'query'},
          {
            text: 'Заголовок',
            align: 'start',
            sortable: false,
            value: 'title',
          },
          { text: 'Описание', value: 'description' },
          { text: 'Дата', value: 'date' },
          { text: 'Агентство', value: 'agency' },
          { text: 'Окраска', value: 'emotion' },
        ],

        isLoaded: false
      }
    },
  }
</script>