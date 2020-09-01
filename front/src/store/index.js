import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from 'axios'
import _ from 'underscore'

export default new Vuex.Store({
  state: {
  	user: {},

  	news: {},
  	domains: {},

  },

  	mutations: {
  		
	  	auth_request(state){
	    	state.status = 'loading'
		},
		 
		auth_success(state, user) {
		    state.status = 'success'
		    state.user = user
		},

		auth_success_token(state, token) {
			state.status = 'success'
			state.token = token
		},

		auth_error(state){
		    state.status = 'error'
		},

		logout(state){
		    state.status = ''
		    state.token = ''
		   	state.user = ''
		},

		fetch_all_news(state, news) {
			state.news = news;
		},

		fetch_all_domains(state, domains) {
			state.domains = domains;
		}

  	},

  	actions: {

	  	async login({commit}, user) {
	  		console.log(user)
		    return new Promise((resolve, reject) => {
		      commit('auth_request')
		      axios({url: 'http://127.0.0.1:4000/login', data: user, method: 'POST' })
		      .then(resp => {
		        
		        if (resp.data.user.access_token) {
		        	console.log("Success!", resp.data.user.access_token)
		        	const user = resp.data.user
		        	const token = user.access_token

			        localStorage.setItem('token', token)
			        localStorage.setItem('user', JSON.stringify(user))
			        axios.defaults.headers.common['Authorization'] = token
			        commit('auth_success', user)
			        commit('auth_success_token', token)

			        resolve(resp)
		        }
		      })
		      .catch(err => {
		        commit('auth_error')
		        localStorage.removeItem('token')
		        reject(err)
		      })
		    })
		},

		logout({commit}){
		  return new Promise((resolve) => {
		    commit('logout')
		    localStorage.removeItem('token')
		    localStorage.removeItem('user')
		    delete axios.defaults.headers.common['Authorization']
		    resolve()
		  })
		},

		async allNews({commit}) {
			var status = true
			await axios.get('http://127.0.0.1:4000/news')
			.then(res => {
				commit('fetch_all_news', res.data.news)
				status = true	
			})
			.catch(error => {
				console.log(error)
				status = false
			})
			return status
		},

		async allDomains({commit}) {
			var status = true
			await axios.get('http://127.0.0.1:4000/domains')
			.then(res => {
				commit('fetch_all_domains', res.data.domains)
				status = true	
			})
			.catch(error => {
				console.log(error)
				status = false
			})
			return status
		}	
  	},

  	getters : {
	  	isLoggedIn: state => !!state.token,
	  	authStatus: state => state.status,

	  	getUser: state => state.user,

	  	getNews: state => _.toArray(state.news),
	  	getDomains: state => _.toArray(state.domains),
	  	getNewsCount: state => state.news.length,
	  	getDomainsCount: state => state.domains.length,
	},

	modules: {},

});
