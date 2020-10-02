import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";
import Resume from "@/views/Resume";
import Projects from "@/views/Projects";
import ProjectSingle from "@/views/ProjectSingle";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/projects/:id",
    name: "Project",
    component: ProjectSingle
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume
  }
];

const router = new VueRouter({
  routes
});

export default router;
