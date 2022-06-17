<script setup lang="ts">
import Header from './layout/Header/Header.vue'
import Main from './layout/Main/Main.vue'
import Aside from '~/layout/Aside/Aside.vue'
import '~/style/default.less'
import '~/style/font.less'
</script>
<template>
  <Header></Header>
  <Main>
    <Aside></Aside>
    <router-view class="content"></router-view>
  </Main>
</template>