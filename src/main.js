import Vue from "vue";
import App from "@/App";

// new Vue({
//   render: function(createElement) {
//     return createElement(App);
//   }
// });
//
// new Vue({
//   render: h => h(App),
//   el: '#app'
// });
new Vue({
  render: h => h(App)
}).$mount('#app');


