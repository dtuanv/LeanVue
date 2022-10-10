<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1" > <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header  elevated class="bg-white text-grey-8 q-py-xs" height-hint="58" >
      <q-toolbar>

        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

        <q-btn flat no-caps no-wrap class="q-ml-xs" to="/">
          <q-avatar><img src="/img/rice.png" alt=""></q-avatar>
          <q-toolbar-title shrink class="text-weight-bold">
            Jasmin
          </q-toolbar-title>
        </q-btn>


        <!-- <q-toolbar-title>
          <q-avatar><img src="/img/ricevn.jpg" alt=""></q-avatar>

        </q-toolbar-title> -->
    <!-- <q-toolbar-title>Jasmin </q-toolbar-title> -->
    <!-- <a href="/"><q-avatar><img src="/img/ricevn.jpg" ></q-avatar></a>
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
          :to="{name:'partner'}"
          label="Partner"
        />
        <q-route-tab
          :to="{name:'test'}"
          label="Test"

          />
        <q-route-tab

          :to="{name:'login'}"
          replace
          label="Login"
        />
      </q-tabs> -->
<!-- </q-toolbar> -->
<q-tabs v-if="$q.screen.gt.sm" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap" >
<!-- <q-tabs v-if="true" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap" > -->
  <q-route-tab :to='"/"' label="Home" />
        <q-route-tab :to="{name:'customer'}" label="Customer"/>
        <q-route-tab
          :to="{name:'product', params:{id:1}}"
          replace
          label="Product"
        />
        <!-- <q-route-tab
            :to="{name:'contact'}"
            replace
          	label="Contact" /> -->
        <!-- <q-route-tab
          :to="{name:'partner'}"
          label="Partner"
        /> -->
        <!-- <q-route-tab
          :to="{name:'test'}"
          label="Test"

          /> -->
        <!-- <q-route-tab

          :to="{name:'reserve'}"
          replace
          label="Reserve"
        /> -->
              <!-- form of git -->
        <!-- <div v-if="$q.screen.gt.sm" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <a href="javascript:void(0)" class="text-white">
            Pull requests
          </a>
          <a href="javascript:void(0)" class="text-white">
            Issues
          </a>
          <a href="javascript:void(0)" class="text-white">
            Marketplace
          </a>
          <a href="javascript:void(0)" class="text-white">
            Explore
          </a>
        </div> -->

      </q-tabs>

      <q-btn class="absolute-top-right q-mt-sm q-mr-md" flat icon="shop" to="/shopping">
        <q-badge color="red" floating transparent>
        {{cartItemCount}}
      </q-badge>
      </q-btn>
</q-toolbar>

    </q-header>
    <q-drawer
        v-model="drawer"
        show-if-above

        :mini="!drawer || miniState"
        @click.capture="drawerClick"

        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <!-- <q-item clickable v-ripple to=""  >
              <q-item-section  avatar>
                <q-icon  name="home"   />

              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item> -->

            <q-item  clickable v-ripple to="/customer">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Customer
              </q-item-section>
            </q-item>

            <q-item  clickable v-ripple to="/product">
              <q-item-section avatar>
                <q-icon name="shopping_bag" />
              </q-item-section>

              <q-item-section>
                Product
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/reservation">
              <q-item-section avatar>
                <q-icon name="book_online" />
              </q-item-section>

              <q-item-section>
                Reservation
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/contact">
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Contact
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/admin">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>
                Admin
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/login">
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section  >
                Login
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <!--
          in this case, we use a button (can be anything)
          so that user can switch back
          to mini-mode
        -->
        <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
          <q-btn
            dense
            round
            unelevated
            color="accent"
            icon="chevron_left"
            @click="miniState = true"
          />
        </div>
      </q-drawer>

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
import { useStore } from 'vuex';

export default {
  // name: 'LayoutName',
  // props:{countCart},
  computed:{
    cartItemCount(){
      return this.$store.getters['cache/cartItemCount'];
    }
  },
  setup () {
    const miniState = ref(false)
    const leftDrawerOpen = ref(false)
    const amountItem =ref(0)
    const $store = useStore()

    return {
      amountItem ,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      drawer: ref(false),
      miniState,

      drawerClick (e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation()
    }
  }
    }}
  }
</script>
