<template>
<div>
  

  <div id="app">
    <center>
    <b-button size="sm" variant="primary" id="show-modal"  @click="showModal = true">Add work</b-button>
  </center>
    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">Add Task</h3>
      <div slot="body"> 
        <label><h4>Name</h4></label>
        <input type="text" v-model="name" id="name" class="form-control">
        <label><h4> Date of the task :</h4></label>
        <input type="date" class="form-control" v-model="eventDate" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31">
        <label for="start"><h4>Choose start time :</h4></label>
        <input type="time" class="form-control" v-model="startDate" id="start" name="start" min="7:00" max="22:00" required>
        <label for="end"><h4>Choose end time :</h4></label>
        <input type="time" class="form-control" v-model="endDate" id="end" name="end" min="7:00" max="22:00" required>
        <div class="note">Office hours are 7am to 10pm</div>
        <div>
          <center>
           <b-button class="modal-default-button" @click="save()" size="sm" variant="primary" style="margin-right:20px">Validate</b-button>
           <b-button class="modal-default-button" @click="quitModal()" size="sm" variant="danger">Cancel</b-button>
          </center>
        </div>
      </div>
    </modal>
  </div>

  <full-calendar ref="calendar" :events="events" :config="config" @event-selected="eventSelected" ></full-calendar>

  <script type="text/x-template" id="modal-template">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header">
              <slot name="header">
                default header
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                default body
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </script>

</div>


</template>

<script>

export default {
  name: 'app',
  name: "",
  eventDate: "",
  startDate: "",
  endDate: "",
  id: null,
  data() {
    return {
      events:[],
      config: {
        defaultView: 'listWeek'
      },
      showModal: false,
      
    }
  },
  mounted(){
    this.events = JSON.parse(sessionStorage.getItem("eventsCalendar"))
  },
  methods :{

    quitModal: function(){
      this.showModal=false;
      this.name = "";
      this.eventDate= "";
      this.startDate= "";
      this.endDate= "";
      this.currentEvent = null
    },

    save: function(){
      var event = {}

      if (!this.startDate && !this.endDate){
        event.start = this.eventDate
        event.end = this.eventDate
      }else{
        event.start = this.eventDate+"T"+this.startDate+":00"
        event.end = this.eventDate+"T"+this.endDate+":00"
      }
      event.title = this.name

      if(this.currentEvent != null){
          this.$refs.calendar.$emit('remove-event', this.currentEvent)
      }
      this.events.push(event)
      sessionStorage.setItem("eventsCalendar", JSON.stringify(this.events))

      this.quitModal()
    },

    eventSelected: function(event, jsEvent, view){
      this.showModal=true;
      this.name= event.title
      console.log(event)

      var temp = event.start._i
      var datetemp = temp.split("T")
      this.eventDate = datetemp[0]
      this.startDate = datetemp[1]

      if(event.end){
        var temp = event.end._i
        var datetemp = temp.split("T")
        this.endDate= datetemp[1]
      }
      this.currentEvent = event
    },

  }

}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color :rgb(32, 168, 216);
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

label{
  margin-top: 15px;
}

</style>
