<template>
  <div class="home">
    <div class="section first">
      <div class="wrapper">
        <img src="@/assets/img/Type 1 Ambulance.png" class="content" alt="">
        <h1>Powerful phrase</h1>
        <a href="#" class="btn btn-black"><p>more</p></a>
        <a href="#" class="arrow-dwn"><img src="@/assets/img/arrow_down.png" alt=""></a>
      </div>
      <div class="red-head">
        <h1>CHOOSE YOUR TYPE</h1>
      </div>
    </div>
    <div class="section second">

    </div>
    <div class="section third">
      <div class="header">
        <div class="white-space"></div>
        <h2>want to sell</h2>
        <div class="white-space"></div>
      </div>
      <h1>YOUR AMBULANCE?</h1>
      <p>We provide the best and save services for your Lorem ipsum 	dolor sit amet, consectetur adipiscing elit, sed do eiusmod 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 	minim veniam, quis nostrud exercitation ullamco laboris nisi 	ut aliquip ex ea commodo consequat. Duis aute irure dolor in 	reprehenderit in voluptate velit esse cillum dolore eu fugiat 	nulla pariatur. Excepteur sint occaecat cupidatat non 	proident, sunt in culpa qui officia deserunt mollit anim id 	est laborum.</p>
      <div class="line-btn">
        <a href="#" class="btn btn-red"><span>Rules</span></a>
        <a href="#" class="btn btn-red"><span>Register</span></a>
      </div>
      <div id="contactus" class="contact">
        <h3>Contact Us</h3>
        <form action="">
          <div class="name">
            <input type="text" name="name" placeholder="Name">
          </div>
          <div class="contacts">
            <input type="email" name="email" placeholder="Email">
            <input type="text" name="phone" placeholder="Phone">
          </div>
          <div class="query">
            <textarea name="question" maxlength="4096" placeholder="Question"></textarea>
            <a href="#" class="btn btn-send">
              <span>Submit</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
1
<script>
export default {
  name: "home",
  components: {}
};
</script>
<style lang="scss">
.first {
  .wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: rgba(115, 115, 115, 0.35);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    img.content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      z-index: -1;
    }
  }
  h1 {
    margin-top: auto;
    color: white;
  }
  .arrow-dwn img {
    margin-bottom: 35px;
  }
  .red-head {
    background-color: #cb2b2c;
    height: 3rem;
    display: flex;
    flex-direction: column;
    h1 {
      margin: auto;
    }
  }
}
.second {
  height: calc(100vh + 3rem);
  position: relative;
  top: -3rem;
}
.third {
  background-color: #f3f3f3;
  position: relative;
  top: -5.4em;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 15px 0 0 0;
  }

  p {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }

  .line-btn {
    display: flex;
    padding: 35px 0;
    margin-bottom: -5.4rem;
    .btn {
      font-size: 1.3rem;
      width: 180px;
      &:first-of-type {
        margin-right: 15px;
      }
      &:last-of-type {
        margin-left: 15px;
      }
      span {
        width: 100%;
        height: 100%;
      }
    }
  }

  .header {
    display: flex;
    overflow: hidden;
    height: 2.4em;
    .white-space {
      background-color: white;
      flex: 1;
      &:first-of-type {
        transform: skewX(-35deg) translateX(-25px);
      }
      &:last-of-type {
        transform: skewX(35deg) translateX(25px);
      }
    }
    h2 {
      min-width: 726px;
      margin: 5px 0 15px 0;
    }
  }

  .contact {
    background-color: #171616;
    color: #fefefe;
    position: relative;
    bottom: -5.4rem;
    padding-bottom: 65px;
    form {
      display: flex;
      flex-direction: column;
      max-width: 1024px;
      margin: auto;
      div {
        display: flex;
        flex-direction: column;
        padding: 20px 0;
      }
      input {
        background-color: #f3f3f3;
        padding: 0 0 0 8px;
        font-size: 1rem;
        flex: 1;
        border: 0;
        &::placeholder {
          color: #282828;
        }
      }
      textarea {
        background-color: #f3f3f3;
        padding: 8px 0 0 8px;
        font-size: 1rem;
        height: 350px;
        border: 0;
        &::placeholder {
          color: #282828;
        }
      }
      .contacts {
        flex-direction: row;
        display: flex;
        input {
          &:first-of-type {
            margin-right: 15px;
          }
          &:last-of-type {
            margin-left: 15px;
          }
        }
      }
    }
  }
}
</style>
