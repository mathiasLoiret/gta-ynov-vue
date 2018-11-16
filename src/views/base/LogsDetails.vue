<template>
  <div class="wrapper">
      <b-card>
        <div v-for="log in logs">
            {{log.date}} : {{log.detail}}
        </div>
      </b-card>
  </div>
</template>

<script>

export default {
  name: 'detaillog',
  data () {
    return {
        logs : [
            {date: '2018/01/01', detail: 'some logs'},
            {date: '2018/01/01', detail: 'some logs2'},
            {date: '2018/01/01', detail: 'some logs3'},
            {date: '2018/01/01', detail: 'some logs4'},
            {date: '2018/01/01', detail: 'some logs5'},
            {date: '2018/01/01', detail: 'some logs6'},
            {date: '2018/01/01', detail: 'some logs7'},
        ]
    }
  },
  methods: {
 
  },
}
</script>

