<template>
  <q-layout view="hHh Lpr fFf" > <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header  >
      <q-toolbar>
    <!-- <q-toolbar-title>Jasmin </q-toolbar-title> -->
    <a href="/"><q-avatar><img src="/img/ricevn.jpg" ></q-avatar></a>
      <q-tabs>

        <q-route-tab :to='"/"' label="Home" />
        <q-route-tab :to="{name:'customer'}" label="Customer"/>
        <q-route-tab
          :to="{name:'product', params:{id:1}}"
          replace
          label="Product"
        />
        <q-route-tab
            :to="{name:'contact'}"
            replace
          	label="Contact" />
        <q-route-tab
          :to="{name:'test'}"
          label="Test"

          />
        <q-route-tab

          :to="{name:'login'}"
          replace
          label="Login"
        />
      </q-tabs>
</q-toolbar>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer>
      <q-tabs switch-indicator>
        <q-route-tab
          icon="home"
          to="/"
          replace
          label="Home"
        />
        <q-route-tab
          icon="shopping_basket"
          :to="{name:'product', params:{id:1}}"

          replace
          label="Product"
        />
      </q-tabs>

    </q-footer>



    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  // name: 'LayoutName',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
