<template>
	<v-container fluid>
		<v-row>
			<v-col><v-img width="450px" src="https://ias.patriotp.ru/public/contact_photo.jpg" /></v-col>
			<v-col>
				<v-row style="font-size: 60px; margin-bottom: 20px;">ГВЦ ВС РФ</v-row>
				<v-row style="font-size: 20px; margin-bottom: 20px;">Программное средство разработано центром разработки программной продукции Главного вычислительного центра Вооруженных Сил Российской Федерации.</v-row>
				<v-row>Информационно-аналитическая система Министерства Обороны Российской Федерации</v-row>
			</v-col>
		</v-row>
		<v-divider></v-divider>
		<v-row>
			<v-col>
				<v-card flat
					>
		  			<v-card-title>Информационно-аналитическая система Министерства обороны Российской Федерации - предназначена для оперативного, формализованного поиска информации и аналитики (оценки) материалов.</v-card-title>
		  		<v-card-text>
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
				</v-card-text>
				</v-card>
			</v-col>
			<v-col>
				    <v-card class="mx-auto"
				      outlined>
				      <v-card-title>Обратная связь</v-card-title>
				      <v-card-text

				      >
				        <div>Оперативный, формализованный поиск информации и аналитики (оценки) материалов.</div>
				        <v-form>
				        	<v-text-field placeholder="Имя">	
				        	</v-text-field>
				        	<v-text-field placeholder="Email"> 
				        	</v-text-field>
				        	<v-text-field placeholder="Тема сообщения">
				        	</v-text-field>
				        	<v-textarea 
				        	solo
				        	placeholder="Сообщение"
				        	hint="Введите свое сообщение">
				        	</v-textarea>
				        	<v-card-actions>
						      <v-btn text>Отправить</v-btn>
						    </v-card-actions>
				        </v-form>
				      </v-card-text>
				    </v-card>
			</v-col>
		</v-row>

		<v-row>
		<v-col>
			<v-list-item two-line>
		      <v-list-item-content>
		        <v-list-item-title style="margin-bottom:5px;">
		        	<div>
		        		<v-icon>
		        			fa-envelope-square
		        		</v-icon>
			        	Адрес
			        </div>
			    </v-list-item-title>
		        <v-list-item-subtitle>г. Москва</v-list-item-subtitle>
		      </v-list-item-content>
		    </v-list-item>
		</v-col>
		<v-col>
		    <v-list-item two-line>
		      <v-list-item-content>
		        <v-list-item-title style="margin-bottom:5px;">
		        	<div>
		        		<v-icon>
		        			fa-phone-volume
		        		</v-icon>
			        	Телефон
			        </div>
			    </v-list-item-title>
		        <v-list-item-subtitle>
		        	<div style="margin-left: 12px;">
			        	<v-row>Р-10-800-80-24</v-row>
						<v-row>Р-10-800-80-26</v-row>
						<v-row>+7 (495) 498-28-24</v-row>
					</div>
				</v-list-item-subtitle>
		      </v-list-item-content>
		    </v-list-item>
		</v-col>
		<v-col>
		    <v-list-item two-line>
		      <v-list-item-content>
		        <v-list-item-title style="margin-bottom:5px;">
		        	<div>
		        		<v-icon>
		        			fa-clock
		        		</v-icon>
			        	Режим работы
			        </div>
			    </v-list-item-title>
		        <v-list-item-subtitle>Пн-Пт: 09:00 - 18:00</v-list-item-subtitle>
		      </v-list-item-content>
		    </v-list-item>
		</v-col>
		</v-row>
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
		}
	}
</script>