<template>
  <div>
    <div>
      <cat-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">Http://</template>
      </cat-input>
    </div>
    <div style="margin-top: 15px;">
      <cat-input placeholder="请输入内容" v-model="input2">
        <template slot="append">.com</template>
      </cat-input>
    </div>
    <!-- <div style="margin-top: 15px;">
      <cat-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <cat-button slot="append" icon="el-icon-search"></cat-button>
      </cat-input>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
</script>

<style scoped>
  .cat-select .cat-input {
    width: 130px;
  }
  .input-with-select .cat-input-group__prepend {
    background-color: #fff;
  }
</style>
