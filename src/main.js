import {createApp} from "vue";

import "/src/style.css";
import App from "/src/App.vue";

// to support element style
import "/node_modules/element-plus/theme-chalk/dark/css-vars.css"

// 创建vue实例
const app = createApp(App);

// 绑定APP.vue到DOM
app.mount('#app');
