<template>
    <div class="login">
        <div class="container">
            <h2>registr<span>A</span>tion form</h2>
            <div class="logo">
                <div class="wrapper">
                    <img src="@/assets/img/logo.png" alt="">
                </div>
            </div>
            <p class="error" v-if="formError">{{ formError }}</p>
            <form name="f1"  >
                <div class="name">
                    <input v-validate.disable="'required'" name="name" v-model="user.name" class="name white" type="text" size="28" maxlength="30" placeholder="Name" />
                    <input v-validate.disable="'required'" name="surname" v-model="user.surname" class="surname red" type="text" size="27" maxlength="30" placeholder="Surname" />  
                </div> 
                <input v-validate.disable="'required|email'" name="email" v-model="user.email" class="reg-data red" type="text" size="60" maxlength="30" placeholder="Email" />
                <input v-validate.disable="{ required: true, min: 6 ,confirmed:'pw_confirm'}"  name="password" v-model="user.password" class="reg-data white" type="password" size="60" maxlength="30" placeholder="Password" />
                <input name="pw_confirm" ref="pw_confirm" class="reg-data red" type="password" size="60" maxlength="30" placeholder="Repeat password" style="margin-bottom:15px"/>
                <input v-validate="'required'" name="rules" type="checkbox" id="agreement" v-model="agreement" v-show="false" />
				<label for="agreement">I have read the <a href="/rules" target="_blank">RULES</a> and I <span>ACCEPT</span> under all conditions that were written there</label>
                <a href="#" @click="submit" class="btn btn-red"><span>Done</span></a>
                <br/>
            </form>
                <div style="position: absolute;display: flex;flex-direction: column;"><span v-show="errors.any()" v-for="error in errors.all()" :key="error" >{{ error }}</span></div>
            <div class="btns">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user: {
                name: '',
                surname: '',
                email: '',
                password: '',
            },
            formError: null,
            agreement: false
        }
    },
    methods: {
        async submit() {
            let res = await this.$validator.validate();
            if(!res){console.log('blya')}else{console.log('zaebis')}
        }
    }
}
</script>

<style lang="scss">
.login {
  height: 100vh;
  .btns {
    margin-bottom: auto;
  }
  .container {
    max-width: 635px;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: auto;
  }
  .logo {
    margin-bottom: 35px;
    min-height: 5rem;
    max-height: 10rem;
    display: flex;
    flex-direction: column;
  }
  h2 {
    margin-top: auto;
    font-weight: 100;
    span {
      color: #cb2b2c;
    }
  }
  a {
    span {
      width: 100%;
    }
    text-decoration: none;
    text-align: left;
    &:hover {
      text-decoration: underline;
    }
    &.forget {
      font-size: 0.5em;
      margin-bottom: 15px;
    }
    &.btn-red {
      background-color: #ff0000 !important;
      border-color: #ff0000 !important;
      border-radius: 6px !important;
      &:hover {
        background-color: white !important;
      }
    }
  }
  input {
    background-color: white;
    padding: 0 0 0 8px;
    font-size: 1rem;
    margin-bottom: 15px;
    &::placeholder {
      color: #282828;
      font-weight: 100;
      opacity: 0.6;
    }
  }
  .btn-grey {
    background: grey;
    opacity: 0.7;
    color: black;
    &:hover {
      color: #cb2b2c !important;
    }
  }
  .btn-reg {
    border-radius: 0 0 7px 7px !important;
    margin-top: -15px;
  }
}

.wrapper {
  position: relative;
  margin: 0 auto;
  min-width: 5rem;
  flex: 1;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: auto;
    height: 100%;
  }
}

form {
    display: flex;
    flex-direction: column;

    input {
        border: 3px solid #d82122;
        border-radius: 35px;
    }



    .name {
        display: flex;
        input {
            width: 45%;
            &:first-of-type {
                margin-right: auto;
            }
            &:last-of-type {
                margin-left: auto;
            }
        }
    }
    
    input[type=checkbox] {
        &+label{
            background-image: url('/img/checkbox.png');
            background-position: 1px 1px;
            background-repeat: no-repeat;
            background-size: 1rem;
            cursor: pointer;
        }
        &:checked+label{
            background-image: url('/img/checkbox-checked.png');
        }
    }
}


</style>
