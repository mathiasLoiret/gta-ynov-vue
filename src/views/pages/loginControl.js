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
                inUsersData = true;
            }
        })
        return inUsersData;
    }
  }
}