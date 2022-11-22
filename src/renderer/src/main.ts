import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import MultiSelect from 'primevue/multiselect'
// import Button from 'primevue/button'
import Column from 'primevue/column'
import Paginator from 'primevue/paginator'
import App from './App.vue'
import StyleClass from 'primevue/styleclass'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)

app.use(PrimeVue)
app.component('Card', Card)
app.component('DataTable', DataTable)
// eslint-disable-next-line vue/no-reserved-component-names
// app.component('Button', Button)
app.component('Column', Column)
app.component('Paginator', Paginator)
app.component('InputText', InputText)
app.component('MultiSelect', MultiSelect)
app.directive('styleclass', StyleClass)

app.mount('#app')
