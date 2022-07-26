<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
         Learn Quasar
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-footer >
        <q-tabs>
        <q-route-tab  icon="settings" label="Home"  to="/" />
        <q-route-tab name="Setting" icon="supervisor_account" label="Customer" to="/customer" exact/>
        <q-tab name="movies" icon="movie" label="Movies" />
       </q-tabs>
      </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :with="250"
      show-if-above
      bordered
      class="drawColor"
      content-class="bg-primary"   > <!-- no result -->

      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"

        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Home',
    icon: 'school',
    link: '/'
  },
  {
    title: 'Customer',
    caption: 'customer page',
    icon: 'supervisor_account',
    link: '/#/customer'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style lang="scss">
@media screen and (min-width: 768px){
  .q-footer{
    display: none;
  }
}
.drawColor{
  background-color: $primary;
}
</style>
