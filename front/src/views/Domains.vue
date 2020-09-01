<template>
	<v-container fluid>
		<v-simple-table>
		    <template v-slot:default>
		      <thead>
		        <tr>
		          <th class="text-left">Домен</th>
		          <th class="text-left">Частота использования</th>
		          <th class="text-left">Пример страницы</th>
		          <th class="text-left"></th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr v-for="item in getDomains" :key="item.id">
		          <td>{{ item.domain }}</td>
		          <td>{{ item.freq }}</td>
		          <td><a :href="item.href" target="_blank">Открыть</a></td>
		          <td><v-btn @click="dialog = true; domain = item">Настроить</v-btn></td>
		        </tr>
		      </tbody>
		    </template>
		  </v-simple-table>

		  <v-dialog
		      v-model="dialog"
		      max-width="800"
		    >
		      <v-card>
		        <v-card-title v-model="domain" class="headline">Введите правильные CSS селекторы для домена: {{ domain.domain }}</v-card-title>

		        <v-card-text>
		          <v-form>
		              <v-container>
		                <v-row>
		                	<v-col cols="12">
		                    <v-text-field
		                      label="Заглавное изображение"
		                      v-model="img"
		                      required
		                    ></v-text-field>
		                </v-col>
		                <v-col cols="12">
		                    <v-text-field
		                      label="Контент"
		                      v-model="content"
		                      required
		                    ></v-text-field>
		                </v-col>
		                </v-row>
		                </v-container>
            		</v-form>
		        </v-card-text>

		        <v-card-actions>
		          <v-spacer></v-spacer>

		          <v-btn
		            color="green darken-1"
		            text
		            @click="dialog = false"
		          >
		            Отмена
		          </v-btn>

		          <v-btn
		            color="green darken-1"
		            text
		            @click="checkDomain(domain.href)"
		          >
		            Проверить
		          </v-btn>

		          <v-btn
		            color="green darken-1"
		            text
		            @click="dialog = false; updateDomains(domain.id)"
		          >
		            Сохранить
		          </v-btn>
		        </v-card-actions>
		      </v-card>
		    </v-dialog>
	</v-container>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex'
	import axios from 'axios'
	// import cheerio from 'cheerio'

	export default {
		data() {
			return {
				dialog: false,
				domain: '',
				img: '',
				content: '',
			}
		},

		created() {
			this.allDomains()
		},

		computed: mapGetters(['getDomains']),

		methods: {
			...mapActions(['allDomains']),
			
			async updateDomains(domain_id) {
				await axios.post('http://127.0.0.1:4000/updateDomain', {
					img: this.img,
					content: this.content,
					id: domain_id
				})
				.then(async res => {
					console.log(res)
					await this.allDomains()
					this.$fire({
		            title: "Уведомление",
		            text: "Домен успешно обновлен!",
		            type: "success",
		            timer: 2000
		            });
				})
			},

			async checkDomain() {
				// await axios.get(url)
				// .then(res => {
				// 	console.log(res.data)
				// 	const $ = cheerio.load(res.data)
				// 	console.log($('.' + this.content).text)
				// })
			}

		}
	}
</script>

<style scoped>
	a {
		color: black !important;
	}
</style>