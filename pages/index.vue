<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        aNuxt
      </h1>
      <h2 class="subtitle">
        Welcome to the iView + Nuxt.js template
      </h2>
      <div class="links">
       <Dropdown>
        <a href="javascript:void(0)">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <Button type="primary">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
        <Button target="_blank" to="https://www.iviewui.com/">iView</Button>
         <nuxt-link to="/001">穿梭狂</nuxt-link>
      </div>
    </div>
    
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>