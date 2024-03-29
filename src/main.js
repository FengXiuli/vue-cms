// 入口文件
import Vue from 'vue'

//导入 MUI 的样式
import'./lib/mui/css/mui.css'

//按需导入Mint-UI组件
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);


//导入 App 根组件 (路径表示 App.vue 和 main.js 属于同一等级)
import app from './App.vue'

var vm = new Vue({
	el: '#app',
	render: c => c(app)
})