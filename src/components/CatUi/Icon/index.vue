<template>
  <i class="icon fa" :class="`fa-${name}`"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String
  }
}
</script>
