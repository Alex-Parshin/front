<template>

  	<v-container fluid>
  		<h1 class="page_title">О проекте</h1>

  		<v-card>
  			<v-card-title>Информационно-аналитическая система Министерства обороны Российской Федерации - предназначена для оперативного, формализованного поиска информации и аналитики (оценки) материалов.</v-card-title>
  		<v-card-body>
		  <v-expansion-panels>
		    <v-expansion-panel
		      v-for="(item,i) in items"
		      :key="i"
		    >
		      <v-expansion-panel-header><div><v-icon>{{ item.icon }}</v-icon>  {{ item.title}}</div></v-expansion-panel-header>
		      <v-expansion-panel-content>
		        {{ item.description }}
		      </v-expansion-panel-content>
		    </v-expansion-panel>
		  </v-expansion-panels>
		</v-card-body>
		  </v-card>
</v-container>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						title: "Поиск",
						description: "Постоянно осуществляется десятками поисковых роботов в медийном пространстве сети.",
						icon: "fa-volume-up"
					},
					{
						title: "Машинное обучение",
						description: "Для оценки и группировки аубликаций используются технологии машинного обучения.",
						icon: "fa-brain"
					},
					{
						title: "Семантика",
						description: "Глубокий анализ материалов и создания ункального словаря.",
						icon: "fa-file-medical-alt"
					},
					{
						title: "Хранение",
						description: "Постоянное хранение исходных материалов.",
						icon: "fa-window-restore"
					},
					{
						title: "Окраска",
						description: "Определение эмоциональной окраски публикаций на основе машинного обучения.",
						icon: "fa-chart-pie"
					}
				]
			}
		},

		created() {

		},

		methods: {

		}
	}
</script>