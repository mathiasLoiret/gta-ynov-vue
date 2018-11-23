import usersData from './UsersData'
import { fail } from 'assert';
import { checkServerIdentity } from 'tls';

export default {
  name: 'User',
  data: () => {
    return {
      failed:false,
      mail: '',
      pwd: ''
    }
  },
  methods: {
    connect(){
        console.log(this.mail);
        console.log(this.pwd);
        if(this.checkServerIdentity()){
            if(sessionStorage.getItem("roleUser") == "Human Resources Director"){
                this.$router.replace({path: '/logs'});
            }else{
                this.$router.replace({path: '/dashboard'});
            }
        }else{
            this.failed = true;
        }
        
    },
    checkServerIdentity(){
        var inUsersData = false;
        usersData.forEach((user)=>{
            if(user.email == this.mail && user.pwd == this.pwd){
                sessionStorage.setItem("idUser", user.id);
                sessionStorage.setItem("nameUser", user.name);
                sessionStorage.setItem("roleUser", user.role);
                sessionStorage.setItem("eventsCalendar", JSON.stringify([ 
                    {
                        title  : 'event1',
                        start  : '2018-11-23',
                    },
                    {
                        title  : 'event2',
                        start  : '2018-01-05',
                        end    : '2018-01-07',
                    },
                    {
                        title  : 'event3',
                        start  : '2010-01-09T12:30:00',
                        allDay : false,
                    },
                  ]));
                console.log(sessionStorage.getItem("eventsCalendar"))
                inUsersData = true;
            }
        })
        return inUsersData;
    }
  }
}