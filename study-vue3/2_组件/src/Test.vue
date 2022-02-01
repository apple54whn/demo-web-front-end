<template>
  <tabs v-for="pane of panes" :key="pane.key">
    <component :is="pane.component" v-on="pane.event" v-bind="propData" />
  </tabs>
</template>

<script>
import Main from './Main.vue'
import Add from './Add.vue'

export default {
  components: {
    Main,
    Add,
  },
  data() {
    return {
      propData: {
        id: '1',
        name: 'conanan',
      },
      panes: [
        {
          key: '1',
          tab: 'main页面',
          component: Main,
          event: { mainEvent1, mainEvent2 },
        },
        {
          key: '2',
          tab: 'add页面',
          component: Add,
          event: { addEvent },
        },
      ],
    }
  },
}
</script>
