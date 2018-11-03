import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/rules",
      name: "rules",
      component: () =>
        import( /* webpackChunkName: "rules" */ "./views/Rules.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import( /* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/registration",
      name: "register",
      component: () =>
        import( /* webpackChunkName: "register" */ "./views/Register.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import( /* webpackChunkName: "profile" */ "./views/Profile.vue")
    },
    {
      path: "/add_car",
      name: "add_car",
      component: () =>
        import( /* webpackChunkName: "add_car" */ "./views/AddCar.vue")
    },
    {
      path: "/car",
      name: "car",
      component: () =>
        import( /* webpackChunkName: "car" */ "./views/Car.vue")
    },
    {
      path: "/my_cars",
      name: "my_cars",
      component: () =>
        import( /* webpackChunkName: "my_cars" */ "./views/MyCars.vue")
    }
  ]
});