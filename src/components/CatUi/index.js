import Row from './Row'
import Col from './Col'
import Button from './Button/Button.vue'
import ButtonGroup from './Button/ButtonGroup.vue'
import Link from './Link/Link.vue'

import Radio from './Radio/Radio.vue'
import RadioButton from './Radio/RadioButton.vue'
import RadioGroup from './Radio/RadioGroup.vue'
import Checkbox from './Checkbox/Checkbox.vue'
import CheckboxGroup from './Checkbox/CheckboxGroup.vue'
import CheckBoxButton from './Checkbox/CheckboxButton.vue'
import Input from './Input/Input.vue'
import Autocomplete from './Autocomplete/Autocomplete.vue'
import InputNumber from './InputNumber/InputNumber.vue'
import Select from './Select/Select.vue'
import Option from './Select/Option.vue'

import Menu from './Menu/Menu.vue'
import MenuItem from './Menu/MenuItem.vue'
import Submenu from './Menu/Submenu.vue'
import MenuItemGroup from './Menu/MenuItemGroup'

import Table from './Table/Table.vue'
import TableColumn from './Table/TableColumn.vue'
import Tag from './Tag/Tag.vue'

import Tooltip from './Tooltip/Tooltip'
import Popover from './Popover'

const components = [
  Row,
  Col,
  Button,
  ButtonGroup,
  Link,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  CheckBoxButton,
  Input,
  Autocomplete,
  InputNumber,
  Select,
  Option,
  Table,
  TableColumn,
  Tag,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Tooltip,
  Popover
]

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$CAT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }
}

export default {
  install
}
