const topCode = `
<div>
  <cat-menu mode="horizontal"
    default-active="1"
    @select="handleSelect">
    <cat-menu-item index="1">处理中心</cat-menu-item>
    <cat-submenu index="2">
      <template slot="title">我的工作台</template>
      <cat-menu-item index="2-1">选项1</cat-menu-item>
      <cat-menu-item index="2-2">选项2</cat-menu-item>
      <cat-menu-item index="2-3">选项3</cat-menu-item>
      <cat-submenu index="2-4">
        <template slot="title">选项4</template>
        <cat-menu-item index="2-4-1">选项1</cat-menu-item>
        <cat-menu-item index="2-4-2">选项2</cat-menu-item>
        <cat-menu-item index="2-4-3">选项3</cat-menu-item>
      </cat-submenu>
    </cat-submenu>
    <cat-menu-item index="3" disabled>消息中心</cat-menu-item>
    <cat-menu-item index="4">订单管理</cat-menu-item>
  </cat-menu>
  <cat-menu mode="horizontal"
    default-active="1"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect">
    <cat-menu-item index="1">处理中心</cat-menu-item>
    <cat-submenu index="2">
      <template slot="title">我的工作台</template>
      <cat-menu-item index="2-1">选项1</cat-menu-item>
      <cat-menu-item index="2-2">选项2</cat-menu-item>
      <cat-menu-item index="2-3">选项3</cat-menu-item>
      <cat-submenu index="2-4">
        <template slot="title">选项4</template>
        <cat-menu-item index="2-4-1">选项1</cat-menu-item>
        <cat-menu-item index="2-4-2">选项2</cat-menu-item>
        <cat-menu-item index="2-4-3">选项3</cat-menu-item>
      </cat-submenu>
    </cat-submenu>
    <cat-menu-item index="3" disabled>消息中心</cat-menu-item>
    <cat-menu-item index="4">订单管理</cat-menu-item>
  </cat-menu>
</div>
`
const asideCode = `
<cat-row>
  <cat-col :span="12">
    <h3>默认颜色</h3>
    <cat-menu default-active="2"
      @open="handleOpen"
      @close="handleClose">
      <cat-submenu index="1">
        <template slot="title">
          <i class="cat-icon-location"></i>
          <span>导航一</span>
        </template>
        <cat-menu-item-group title="分组一">
          <cat-menu-item index="2-1">选项1</cat-menu-item>
          <cat-menu-item index="2-2">选项2</cat-menu-item>
        </cat-menu-item-group>
        <cat-menu-item-group>
          <span slot="title">分组二</span>
          <cat-menu-item index="2-3">选项3</cat-menu-item>
          <cat-menu-item index="2-4">选项4</cat-menu-item>
        </cat-menu-item-group>
      </cat-submenu>
      <cat-menu-item index="2">
        <i class="cat-icon-menu"></i>
        <span slot="title">导航二</span>
      </cat-menu-item>
      <cat-menu-item index="3">
        <i class="cat-icon-document"></i>
        <span slot="title">导航三</span>
      </cat-menu-item>
      <cat-menu-item index="4">
        <i class="cat-icon-setting"></i>
        <span slot="title">导航四</span>
      </cat-menu-item>
    </cat-menu>
  </cat-col>
  <cat-col :span="12">
    <h3>自定义颜色</h3>
    <cat-menu default-active="2"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <cat-submenu index="1">
        <template slot="title">
          <i class="cat-icon-location"></i>
          <span>导航一</span>
        </template>
        <cat-menu-item-group title="分组一">
          <cat-menu-item index="2-1">选项1</cat-menu-item>
          <cat-menu-item index="2-2">选项2</cat-menu-item>
        </cat-menu-item-group>
        <cat-menu-item-group>
          <span slot="title">分组二</span>
          <cat-menu-item index="2-3">选项3</cat-menu-item>
          <cat-menu-item index="2-4">选项4</cat-menu-item>
        </cat-menu-item-group>
      </cat-submenu>
      <cat-menu-item index="2">
        <i class="cat-icon-menu"></i>
        <span slot="title">导航二</span>
      </cat-menu-item>
      <cat-menu-item index="3">
        <i class="cat-icon-document"></i>
        <span slot="title">导航三</span>
      </cat-menu-item>
      <cat-menu-item index="4">
        <i class="cat-icon-setting"></i>
        <span slot="title">导航四</span>
      </cat-menu-item>
    </cat-menu>
  </cat-col>
</cat-row>

<script>
export default {
  methods: {
    handleOpen (index, indexPath) {
      console.log(index, indexPath)
    },
    handleClose (index, indexPath) {
      console.log(index, indexPath)
    }
  }
}
</script>
`

const collapseCode = `
<div>
  <cat-button @click="isCollapse = !isCollapse">{{ isCollapse ? '展开' : '折叠' }}</cat-button>
  <cat-menu default-active="2"
    :collapse="isCollapse">
    <cat-submenu index="1">
      <template slot="title">
        <i class="cat-icon-location"></i>
        <span>导航一</span>
      </template>
      <cat-menu-item-group title="分组一">
        <cat-menu-item index="2-1">选项1</cat-menu-item>
        <cat-menu-item index="2-2">选项2</cat-menu-item>
      </cat-menu-item-group>
      <cat-menu-item-group>
        <span slot="title">分组二</span>
        <cat-menu-item index="2-3">选项3</cat-menu-item>
      </cat-menu-item-group>
      <cat-submenu index="2-4">
        <template slot="title">选项4</template>
        <cat-menu-item index="2-4-1">选项1</cat-menu-item>
      </cat-submenu>
    </cat-submenu>
    <cat-menu-item index="2">
      <i class="cat-icon-menu"></i>
      <span slot="title">导航二</span>
    </cat-menu-item>
    <cat-menu-item index="3">
      <i class="cat-icon-document"></i>
      <span slot="title">导航三</span>
    </cat-menu-item>
    <cat-menu-item index="4">
      <i class="cat-icon-setting"></i>
      <span slot="title">导航四</span>
    </cat-menu-item>
  </cat-menu>
</div>

<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  }
}
</script>

`

export default {
  topCode,
  asideCode,
  collapseCode
}
