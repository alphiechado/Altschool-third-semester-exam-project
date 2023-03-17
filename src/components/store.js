import {createStore} from 'vuex';
import VuexPersistence from 'vuex-persist'


const store= createStore({
   state:{
     count:0
   },
   getters:{
    getCount(state){
       return state.count;
    }
   },
   actions:{
   async incrementCount({commit},payload){
    return Promise.resolve(commit('incrementCount', payload))
   },
   async decrementCount({commit}){
    return Promise.resolve(commit('decrementCount', 1))
   },
   async reset({commit}){
    return Promise.resolve(commit('reset'))
   },
   async setValue({commit},payload){
    return Promise.resolve(commit('setValue', payload))

   }
   },
   mutations:{
       incrementCount(state,payload){
           return state.count += payload
       },
       decrementCount(state,payload){
        return state.count -= payload
    },
       reset(state){
         return state.count = 0;
       },
       setValue(state,payload){
        return state.count = payload
       }

   },
  plugins: [new VuexPersistence().plugin]

})

export default store