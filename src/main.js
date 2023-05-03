import { createApp } from "vue";

//Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

//Styling (tailwind/css)
import "./index.css";
import App from "./App.vue";

//motionplugin (animation on view)
import { MotionPlugin } from "@vueuse/motion";

library.add(faGithub, faLinkedin);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(MotionPlugin)
  .mount("#app");
