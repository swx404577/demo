import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//创建且声明一个对象
export const store = new Vuex.Store({
    state:{
        isShow:true,
        items:[
        {
            name:"张三",
            num:"1"
        },
        {
            name:"李四",
            num:"2"
        },
        {
            name:"王五",
            num:"3"
        }
        ]
    }
})