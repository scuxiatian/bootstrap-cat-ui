import Vue from 'vue'
import ShowBox from './ShowBox'
import ShowTable from './ShowTable'
import ViewPage from './ViewPage'

import CatUI from './CatUi'

Vue.use(CatUI)

Vue.component('show-box', ShowBox)
Vue.component('show-table', ShowTable)
Vue.component('view-page', ViewPage)
