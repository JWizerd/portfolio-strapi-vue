import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";
import Resume from "@/views/Resume";
import Projects from "@/views/Projects";
import ProjectSingle from "@/views/ProjectSingle";
import titleMetaTagsGuard from "@/router/guards/title-metatags.guard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "HOME - Jeremiah Wodke Full-Stack Web Developer",
      description:
        "I have a passion for building full-stack JavaScript applications to improve the lives of my clients and their customers alike."
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "ABOUT - Jeremiah Wodke Full-Stack Web Developer",
      description:
        "Enthusiastic full-stack developer with a passion for continuous growth, and innovation..."
    }
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: "PROJECTS - Jeremiah Wodke Full-Stack Web Developer",
      description:
        "Portfolio of projects where Jeremiah was the sole developer or lead of given website project or application..."
    }
  },
  {
    path: "/projects/:id",
    name: "Project",
    component: ProjectSingle,
    meta: {
      title: "PROJECT - Jeremiah Wodke Full-Stack Web Developer"
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "CONTACT - Jeremiah Wodke Full-Stack Web Developer",
      description: "Interested in working with me? Shoot me a message!"
    }
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

router.beforeEach(titleMetaTagsGuard);

export default router;
