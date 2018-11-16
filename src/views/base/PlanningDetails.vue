<template>
  <v-app id="dayspan" v-cloak>
    <ds-calendar-app :calendar="calendar"></ds-calendar-app>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    calendar: Calendar.months()
  })
}
</script>