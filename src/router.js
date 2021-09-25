import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routes = [
  {
    path: "/views",
    component: () => import("./views"), //webpackChunkName app
    redirect: "/landingv1",
    children: [
      {
        path: "/demos",
        component: () => import("./views/Home.vue")
      },
      {
        path: "/landingv1",
        component: () => import("./views/landingOne.vue")
      },
      {
        path: "/landingv2",
        component: () => import("./views/landingTwo.vue")
      },
      {
        path: "/landingv3",
        component: () => import("./views/landingThree.vue")
      },
      {
        path: "/landingv4",
        component: () => import("./views/landingFour.vue")
      },
      {
        path: "/landingv5",
        component: () => import("./views/landingFive.vue")
      },
      {
        path: "/landingv6",
        component: () => import("./views/landingSix.vue")
      },
      {
        path: "/landingv7",
        component: () => import("./views/landingSeven.vue")
      },
      {
        path: "/landingv8",
        component: () => import("./views/landingEight.vue")
      },
      {
        path: "/landingv9",
        component: () => import("./views/landingNine.vue")
      },
      {
        path: "/landingv10",
        component: () => import("./views/landingTen.vue")
      },
      {
        path: "/landingv11",
        component: () => import("./views/landingEleven.vue")
      },
      
    ]
  },
  {
    path: "/",
    redirect: "/demo",
    component: () => import("./demo"),
    children: [
      {
        path: "/demo",
        component: () => import("./demo/demo.vue")
      },
    ]
    
  }
];

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return {x: 0, y: 200};
  },
  base: process.env.BASE_URL,
  routes
  // routes: [
  //   {
  //     path: "/",
  //     name: "home",
  //     component: Home
  //   },
  //   {
  //     path: "/landingOne",
  //     name: "landingOne",
  //     component: LandingOne
  //   },
  //   {
  //     path: "/landingTwo",
  //     name: "landingTwo",
  //     component: LandingTwo
  //   },
  //   {
  //     path: "/landingThree",
  //     name: "landingThree",
  //     component: LandingThree
  //   },
  //   {
  //     path: "/landingFour",
  //     name: "landingFour",
  //     component: LandingFour
  //   },
  //   {
  //     path: "/landingFive",
  //     name: "landingFive",
  //     component: LandingFive
  //   },
  //   {
  //     path: "/landingSix",
  //     name: "landingSix",
  //     component: LandingSix
  //   },
  //   {
  //     path: "/landingSeven",
  //     name: "landingSeven",
  //     component: LandingSeven
  //   },
  //   {
  //     path: "/landingEight",
  //     name: "landingEight",
  //     component: LandingEight
  //   },
  //   {
  //     path: "/landingNine",
  //     name: "landingNine",
  //     component: LandingNine
  //   },
  //   {
  //     path: "/landingTen",
  //     name: "landingTen",
  //     component: LandingTen
  //   },
  //   {
  //     path: "/landingEleven",
  //     name: "landingEleven",
  //     component: LandingEleven
  //   }
  // ]
});
