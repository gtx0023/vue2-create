import Vue from 'vue'

const constructorCmp = (cmp, data, propsData) => {
  const Constructor = Vue.extend(cmp)
  const Instence = new Constructor({ data, propsData })
  return Instence.$mount()
}

export default constructorCmp
