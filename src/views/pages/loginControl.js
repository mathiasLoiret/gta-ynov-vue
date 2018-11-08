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
            this.$router.replace({path: '/dashboard'})
        }else{
            this.failed = true;
        }
        
    },
    checkServerIdentity(){
        var inUsersData = false;
        usersData.forEach((user)=>{
            if(user.email == this.mail && user.pwd == this.pwd)
            inUsersData = true;
        })
        return inUsersData;
    }
  }
}