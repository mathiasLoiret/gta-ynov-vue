<template>
<div>

    <label><h4>Name</h4></label>
    <input type="text" v-model="name" class="form-control">

    <label><h4>Role</h4></label>
    <input type="text" class="form-control" v-model="role" name="trip-start">

    <label for="start"><h4>Start Date Contract</h4></label>
    <input type="Date" class="form-control" v-model="startDate" required>

    <label for="end"><h4>End Date Contract</h4></label>   
    <input type="Date" class="form-control" v-model="endDate" required>

    <div style="margin-top:10px">
        <center>
        <b-button class="modal-default-button" @click="save()" size="sm" variant="primary">Change</b-button>
        </center>
    </div>

</div>


</template>

<script>

export default {
  name: 'app',
  data() {
    return {
        name: sessionStorage.getItem("nameUser"),
        role: sessionStorage.getItem("roleUser"),
        startDate: sessionStorage.getItem("SDC"),
        endDate: sessionStorage.getItem("EDC")
    }
  },
  mounted(){

  },
  methods :{
      save: function(){
        sessionStorage.setItem("nameUser",this.name),
        sessionStorage.setItem("roleUser",this.role),
        sessionStorage.setItem("SDC",this.startDate),
        sessionStorage.setItem("EDC",this.endDate)
      }
  }

}
</script>
