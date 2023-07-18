<template>
  <div class="screen" ref="screen"></div>
</template>

<script>
import form from "../cmp/form";
import constructorCmp from '@/utils/constructor.js'
export default {
  name: "create",
  data(){
    return{
      formIns: null
    }
  },
  methods:{
    init(){
      this.formIns = constructorCmp(form, {}, {})
      this.$refs.screen.appendChild(this.formIns.$el)
      this.formIns.$on('post', () => {
        // 监听回调
      })
    }
  }
}
</script>

<style scoped>

</style>
