<template>
<v-row justify="center">
  <v-dialog v-model="dialog" persistent max-width="600">
    <v-card>
      <v-card-title class="headline">Настройка параметров поиска</v-card-title>
      <v-card-text>
        
        <v-form>
          <v-container>
            <v-row>
              <h2>Яндекс.Новости</h2>
              <v-col
                cols="12"
              
              >
                <v-text-field
                  v-model="ySel.title"
                  label="Заголовок"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
               
              >
                <v-text-field
                  v-model="ySel.description"
                  label="Описание"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                
              >
                <v-text-field
                  v-model="ySel.date"
                  label="Дата"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
          
              >
                <v-text-field
                  v-model="ySel.agency"
                  label="Агентство"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <h2>Рамблер.Новости</h2>
              <v-col
                cols="12"
               
              >
                <v-text-field
                  v-model="rSel.title"
                  label="Заголовок"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
             
              >
                <v-text-field
                  v-model="rSel.description"
                  label="Описание"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                                >
                <v-text-field
                  v-model="rSel.date"
                  label="Дата"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="rSel.agency"
                  label="Агентство"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <h2>Гугл.Новости</h2>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="gSel.title"
                  label="Заголовок"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="gSel.description"
                  label="Описание"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="gSel.date"
                  label="Дата"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="gSel.agency"
                  label="Агентство"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">Отмена</v-btn>
        <v-btn 
          color="green darken-1" 
          text 
          @click="updateConfig(); dialog = false">
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-row>
</template>