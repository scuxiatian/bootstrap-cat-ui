import Vue from 'vue'
import Row from './Row'
import Col from './Col'
import Button from './Button'
import ButtonGroup from './Button/ButtonGroup.vue'
import Link from './Link'

import Radio from './Radio/Radio.vue'
import RadioGroup from './Radio/RadioGroup.vue'

import Menu from './Menu'
import MenuItem from './Menu/MenuItem.vue'
import Submenu from './Menu/Submenu.vue'
import MenuItemGroup from './Menu/MenuItemGroup'
import Table from './Table/Table.vue'
import TableColumn from './Table/TableColumn.vue'

Vue.component('cat-row', Row)
Vue.component('cat-col', Col)
Vue.component('cat-button', Button)
Vue.component('cat-button-group', ButtonGroup)
Vue.component('cat-link', Link)

Vue.component('cat-radio', Radio)
Vue.component('cat-radio-group', RadioGroup)

Vue.component('cat-table', Table)
Vue.component('cat-table-column', TableColumn)

Vue.component('cat-menu', Menu)
Vue.component('cat-menu-item', MenuItem)
Vue.component('cat-submenu', Submenu)
Vue.component('cat-menu-item-group', MenuItemGroup)
