Vue.component('hello-component' ,{
  template: '<p>Hello!</p>'
})
var SampleComponent = {
  template: '<p>Sample!</p>'
}

var app = new Vue({
  el: "#app",
  components: {
    'sample-component' : SampleComponent
  }
})