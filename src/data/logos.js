// Logos for the skills, from Font Awesome (https://fontawesome.com).
// Real brand logos where Font Awesome has them. Font Awesome has no logo for some tools
// (e.g. MongoDB, Photoshop, Vite), so those get a fitting general icon instead.
import {
  faHtml5, faCss3Alt, faSass, faJs, faReact, faVuejs, faTailwindCss, faNodeJs,
  faWordpress, faPhp, faGitAlt, faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faDatabase, faFire, faCubes, faRectangleList, faCartShopping, faImage, faPenNib,
  faObjectGroup, faCube, faFilm, faMusic, faBolt, faCode, faCaretUp, faCloud,
  faArrowRightArrowLeft, faRoute, faFileCode, faMagnifyingGlassChart,
} from '@fortawesome/free-solid-svg-icons'

export const logos = {
  html: { name: 'HTML', icon: faHtml5 },
  css: { name: 'CSS', icon: faCss3Alt },
  sass: { name: 'SASS', icon: faSass },
  js: { name: 'JavaScript', icon: faJs },
  react: { name: 'React', icon: faReact },
  vue: { name: 'Vue', icon: faVuejs },
  tailwind: { name: 'Tailwind CSS', icon: faTailwindCss },

  node: { name: 'Node.js / Express', icon: faNodeJs },
  mongodb: { name: 'MongoDB', icon: faDatabase },
  firebase: { name: 'Firebase', icon: faFire },

  wordpress: { name: 'WordPress', icon: faWordpress },
  php: { name: 'PHP', icon: faPhp },
  gutenberg: { name: 'Gutenberg blocks', icon: faCubes },
  acf: { name: 'ACF / Formidable', icon: faRectangleList },
  woocommerce: { name: 'WooCommerce', icon: faCartShopping },

  photoshop: { name: 'Photoshop', icon: faImage },
  illustrator: { name: 'Illustrator', icon: faPenNib },
  xd: { name: 'Adobe XD', icon: faObjectGroup },
  blender: { name: 'Blender', icon: faCube },
  davinci: { name: 'DaVinci Resolve', icon: faFilm },
  music: { name: { da: 'Musikproduktion', en: 'Music production' }, icon: faMusic },

  git: { name: 'Git', icon: faGitAlt },
  github: { name: 'GitHub', icon: faGithub },
  vite: { name: 'Vite', icon: faBolt },
  eslint: { name: 'ESLint', icon: faCode },
  vercel: { name: 'Vercel', icon: faCaretUp },
  cloudinary: { name: 'Cloudinary', icon: faCloud },
  axios: { name: 'Axios', icon: faArrowRightArrowLeft },
  router: { name: 'React Router', icon: faRoute },
  handlebars: { name: 'Handlebars', icon: faFileCode },
  seo: { name: 'SEO (Mangools)', icon: faMagnifyingGlassChart },
}
