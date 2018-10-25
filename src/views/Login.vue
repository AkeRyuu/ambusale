<template>
    <div class="login">
        <div class="container">
            <div class="logo">
                <div class="wrapper">
                    <img src="@/assets/img/logo.png" alt="">
                </div>
            </div>
            <h2>welcome to <span>A</span>mbusale</h2>
            <input class="noSelect" type="email" name="email" placeholder="Email">
            <input class="noSelect" type="password" name="pass" placeholder="Password">
            <a href="#" class="forget"><span>Forgotten your password?</span></a>
            <div class="btns">
                <a href="" class="btn btn-red"><span>Enter</span></a>
                <a href="" class="btn btn-grey btn-reg"><span>not registered? click here</span></a>
            </div>
        </div>
    </div>
</template>
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
    margin-top: auto;
    min-height: 5rem;
    max-height: 10rem;
    display: flex;
    flex-direction: column;
  }
  h2 {
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
    border: 1px solid black;
    border-radius: 8px;
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
</style>
