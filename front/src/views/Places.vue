<template>
	<v-container fluid>
		<v-row>
			<v-col sm="6" md="3" xs="3" v-for="item in items" :key="item.id">
				<v-card
				    class="mx-auto card pa-3"
				    max-width="344" 
				    elevation="5"
				  >
				    <v-img
				      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
				      height="200px"
				    ></v-img>

				    <v-card-title>
				      {{ item.title }}
				    </v-card-title>

				    <v-card-subtitle>
				      Всего новостей: 
				    </v-card-subtitle>

				    <v-card-actions>
				      <v-btn 
						@click.stop="dialog = !dialog"
				      	>Открыть</v-btn>

				      <v-spacer></v-spacer>

				    </v-card-actions>

				    <v-expand-transition>
				      <div v-show="show">
				        <v-divider></v-divider>

				        <v-card-text>
				          {{ item.text }}
				        </v-card-text>
				      </div>
				    </v-expand-transition>

				  </v-card>				
			</v-col>
		</v-row>
		<v-row justify="center">
    <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Open Dialog
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
	</v-container>
</template>

<script>
	export default {
		data() {
				return {
					show: true,
					dialog: false,
					items: [
						{
							id: 1,
							title: "Площадка 1",
							text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						},
						{
							id: 1,
							title: "Площадка 1",
							text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						},
						{
							id: 1,
							title: "Площадка 1",
							text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						},
						{
							id: 1,
							title: "Площадка 1",
							text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						},
						{
							id: 1,
							title: "Площадка 1",
							text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						},
						{
							id: 1,
							title: "Площадка 1",
							text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						},
						{
							id: 1,
							title: "Площадка 1",
							text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						},
						{
							id: 1,
							title: "Площадка 1",
							text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						},

					]
			}
		},

		created() {

		}
	}
</script>