<template>
  <div>
    <div>
      <cat-radio-group v-model="radio1">
        <cat-radio-button label="上海"></cat-radio-button>
        <cat-radio-button label="北京"></cat-radio-button>
        <cat-radio-button label="广州"></cat-radio-button>
        <cat-radio-button label="深圳"></cat-radio-button>
      </cat-radio-group>
    </div>
    <div class="radio-row">
      <cat-radio-group v-model="radio2" size="medium" fill="#545c64" textColor="#ffd04b">
        <cat-radio-button label="上海"></cat-radio-button>
        <cat-radio-button label="北京"></cat-radio-button>
        <cat-radio-button label="广州"></cat-radio-button>
        <cat-radio-button label="深圳"></cat-radio-button>
      </cat-radio-group>
    </div>
    <div class="radio-row">
      <cat-radio-group v-model="radio3" size="small">
        <cat-radio-button label="上海"></cat-radio-button>
        <cat-radio-button label="北京" disabled></cat-radio-button>
        <cat-radio-button label="广州"></cat-radio-button>
        <cat-radio-button label="深圳"></cat-radio-button>
      </cat-radio-group>
    </div>
    <div class="radio-row">
      <cat-radio-group v-model="radio4" size="mini" disabled>
        <cat-radio-button label="上海"></cat-radio-button>
        <cat-radio-button label="北京"></cat-radio-button>
        <cat-radio-button label="广州"></cat-radio-button>
        <cat-radio-button label="深圳"></cat-radio-button>
      </cat-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio1: '上海',
      radio2: '上海',
      radio3: '上海',
      radio4: '上海'
    }
  }
}
</script>

<style scoped>
.radio-row {
  margin-top: 20px;
}
</style>
