<template>
    <div class="profile">
        <div class="contaier">
            <div class="red"></div>
            <div class="logo">
                <div class="wrapper">
                    <img src="/img/default.png" alt="">
                </div>
                <ul class="social">
                    <li>
                        <div class="wrapper"><img src="@/assets/social/twitter.png" alt=""></div>
                    </li>
                    <li>
                        <div class="wrapper"><img src="@/assets/social/facebook.png" alt=""></div>
                    </li>
                </ul>
            </div>
            <div class="main">
                <div class="info">
                    <div class="name">
                        <p>Name</p>
                        <p>Surname</p>
                    </div>
                    <div class="params">
                        <label for="">email <p>namesurname@email.com</p></label>
                        
                        <input type="email" placeholder="" value="namesurname@email.com" v-show="false">
                        <div class="action">
                            <span>
                                <a href="">
                                    <div class="wrapper"><img src="@/assets/actions/edit.png" alt=""></div>
                                </a><span class="text">edit</span></span>
                            <span v-show="false">saved <a href=""><span class="wrapper"><img src="@/assets/actions/accept.png" alt=""></span></a></span>
                            <span v-show="false">
                                <a href="">
                                    <span class="wrapper">
                                        <img src="@/assets/actions/accept.png" alt="">
                                    </span>
                                </a>
                                <a href="">
                                    <span class="wrapper">
                                        <img src="@/assets/actions/cancle.png" alt="">
                                    </span>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div class="params">
                        <label for="">email <p>namesurname@email.com</p></label>
                        
                        <input type="email" placeholder="" value="namesurname@email.com" v-show="false">
                        <div class="action">
                            <span>
                                <a href="">
                                    <div class="wrapper"><img src="@/assets/actions/edit.png" alt=""></div>
                                </a><span class="text">edit</span></span>
                            <span v-show="false">saved <a href=""><span class="wrapper"><img src="@/assets/actions/accept.png" alt=""></span></a></span>
                            <span v-show="false">
                                <a href="">
                                    <span class="wrapper">
                                        <img src="@/assets/actions/accept.png" alt="">
                                    </span>
                                </a>
                                <a href="">
                                    <span class="wrapper">
                                        <img src="@/assets/actions/cancle.png" alt="">
                                    </span>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div class="params">
                        <label for="">email <p>namesurname@email.com</p></label>
                        
                        <input type="email" placeholder="" value="namesurname@email.com" v-show="false">
                        <div class="action">
                            <span>
                                <a href="">
                                    <div class="wrapper"><img src="@/assets/actions/edit.png" alt=""></div>
                                </a><span class="text">edit</span></span>
                            <span v-show="false">saved <a href=""><span class="wrapper"><img src="@/assets/actions/accept.png" alt=""></span></a></span>
                            <span v-show="false">
                                <a href="">
                                    <span class="wrapper">
                                        <img src="@/assets/actions/accept.png" alt="">
                                    </span>
                                </a>
                                <a href="">
                                    <span class="wrapper">
                                        <img src="@/assets/actions/cancle.png" alt="">
                                    </span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="add-social">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
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

.profile {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

    .red {
        height: 15vh;
        background-color: #e93d3d;
    }

    .logo {
        margin-top: -2.5rem;
        margin-left: 35px;

        .wrapper {
            height: 5rem;

            img {
                border-radius: 50%;
            }
        }

        display: flex;
        margin-bottom: -2.5rem;
    }

    .social {
        margin-top: 1.25rem;
        padding-left: 5.25rem;
        position: absolute;
        display: flex;
        list-style: none;

        li {
            padding-left: 5px;
            width: 1rem;

            .wrapper {
                height: 1rem;
            }
        }
    }

    .main {

        .info {
            flex: 5;
        }

        .add-social {
            flex: 2;
        }

        display: flex;
        margin-left: 40px;

        .name {
            display: flex;
            margin-left: 5rem;

            p {
                font-size: 1.5rem;
                margin-block-start: 0.2em;
                margin-block-end: 0.5em;
                margin-right: 0.5em;
            }
        }


        .params {
            display: flex;
            margin: 15px 0;

            label {
                background-color: #f54444;
                padding: 0 0 0 25px;
                flex: 5;
                border-radius: 45px;
                display: flex;
                z-index: 1;
            }

            .action {
                flex: 1;
                a {
                        /* height: 100%; */
                        margin-right: auto;

                        .wrapper {
                            min-height: 100%;
                            min-width: 5px;
                            margin-right: auto;
                        }
                        
                }
                span {
                    display: flex;
                    /* text-align-last: right; */
                    padding-right: 15px;
                    background-color: #d6d6d6;
                    height: 100%;
                    border-radius: 35px;
                    margin-left: 20px;

                    

                    .text {
                        padding: 0;
                        margin-right: auto;
                        padding-top: 5px;
                        background-color: transparent;
                    }
                    }
                
            }

            p {
                flex: 1;
                background-color: #d6d6d6;
                padding-top: 5px;
                padding-bottom: 5px;
                border-radius: 45px;
                z-index: 2;
                margin: 0;
                margin-left: 30px;

                span {
                    display: flex;
                    /* text-align-last: right; */
                    padding-right: 15px;
                    background-color: #d6d6d6;
                    height: 100%;
                    border-radius: 35px;
                    margin-left: 20px;

                    

                    .text {
                        padding: 0;
                        margin-right: auto;
                        padding-top: 5px;
                        background-color: transparent;
                    }
                }
            }

            input {
                flex: 1;
                background-color: #d6d6d6;
                padding-top: 5px;
                padding-bottom: 5px;
                border-radius: 45px;
                z-index: 2;
                margin: 0;
                margin-left: 30px;
            }

        }
    }
}
</style>
