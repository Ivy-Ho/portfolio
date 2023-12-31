import {
  github,
  medium,
  linkedin,
  resume,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  vue,
  redux,
  tailwind,
  nodejs,
  git,
  udn,
  code,
  transart,
  maison,
  money,
  money_pc,
  money_mb,
  money_story_pc,
  money_story_mb,
  money_industry_pc,
  money_industry_mb,
  energy,
  energy_pc,
  energy_mb,
  energy_article_pc,
  energy_article_mb,
  annual_event,
  annual_event_pc,
  annual_event_mb,
  game,
  award,
  no_award,
  server,
  server_pc,
  server_mb,
  server_article_pc,
  server_article_mb,
  business,
  business_pc,
  business_mb,
  spring_event,
  spring_event_pc,
  spring_event_mb,
  sunny,
  sunny_1,
  sunny_2,
  sunny_3,
  portfolio,
  foreach,
  foreach_product_pc,
  foreach_product_mb,
  foreach_products_pc,
  foreach_products_mb,
  foreach_checkout_pc,
  foreach_checkout_mb,
  threejs,
  webpack,
  vite
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socialLinks = [
  {
    name: 'github',
    img: github,
    url: "https://github.com/Ivy-Ho",
  },
  // {
  //   name: 'linkedin',
  //   img: linkedin,
  //   url: "",
  // },
  {
    name: 'resume',
    img: resume,
    url: "https://www.cakeresume.com/s--QNJEhx9togzSwOlcoMNCNQ--/ivycodefive",
  },
  {
    name: 'medium',
    img: medium,
    url: "https://medium.com/ivycodefive",
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "webpack",
  //   icon: webpack,
  // },
  {
    name: "vite",
    icon: vite,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "進修時刻",
    company_name: "In Between Jobs",
    icon: code,
    iconBg: "#E6DEDD",
    date: "Now",
    points: [
      "基於對動態網頁製作的熱愛，開始摸索相關技術，如 framer motion, GSAP, Three.js，並學習 React.js + Tailwind 作為主要開發框架。",
      "受 Bruno Simon 啟發，對 3D 網頁製作產生興趣，嘗試使用 React-three-fiber，製作出 Sunny's Dance Club 以及此個人網站。"],
  },
  {
    title: "助理前端工程師 (2 years)",
    company_name: "聯合線上股份有限公司",
    icon: udn,
    iconBg: "#383E56",
    date: "November 2020 - February 2023",
    points: [
      "擔任「經濟日報」助理前端工程師。",
      "歷經平台翻新改版，改為會員訂閱制，負責經濟日報平台頁面切版、功能製作、api 資料串接，上線後的維護與更新。",
      "另負責新聞專題頁、活動頁製作。",
      "兩年間對 CSS、JavaScript 與 Webpack 有了更深入的掌握與了解。"
    ],
  },
  {
    title: "自學網頁前端程式語言 (1 year)",
    company_name: "",
    icon: code,
    iconBg: "#E6DEDD",
    date: "September 2019 - September 2020",
    points: [
      "2019 年 9 月開始自學網頁前端程式語言。",
      "於 2019 年 12 月爭取第一個接案機會，製作出響應式網頁。",
      "後續學習 Vue.js + Bootstrap 作為主要開發框架，製作出面試作品。"
    ],
  },
  {
    title: "行銷專員、業務專員 (1 year)",
    company_name: "政伸企業股份有限公司",
    icon: transart,
    iconBg: "#383E56",
    date: "March 2018 - March 2019",
    points: [
      "於行銷部負責參展相關事宜聯繫，也負責整理、更新公司產品規格表，進而熟悉產品製程及特性。",
      "於同年 7 月至業務部支援一個月，熟悉業務工作內容，主動學習的精神備受肯定。",
      "於下一個月正式加入業務部擔任業務專員，最初負責外銷客戶聯繫，熟悉後漸漸接下內銷零件廠及組車廠客戶。",
    ],
  },
  {
    title: "外場總負責人(1 year)",
    company_name: "地中海料理餐廳",
    icon: maison,
    iconBg: "#fff",
    date: "September 2016 - September 2017",
    points: [
      "經歷開店前籌備、器具的採購、菜單編排與定價。",
      "後續負責店內營收報表管理、出納管理、PT 招募及排班、外場管理、各式活動接洽。",
    ],
  },
];

// project id < 10
// sideProject: id > 10
const projectData = [
  {
    id:'1',
    name: "經濟日報",
    description: [
      "html",
      "scss 切版",
      "JavaScript 功能製作",
      "Swiper 輪播套件",
      "API 串接",
      "後續維護網站至 2023 年 2 月"
    ],
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "gulp",
        color: "pink-text-gradient",
      },
    ],
    image: money,
    gallery: [ money_pc, money_mb, money_story_pc, money_story_mb, money_industry_pc, money_industry_mb,],
    site_url: "https://money.udn.com/money/index",
    source_code_link: "https://github.com/",
  },
  {
    id:'2',
    name: "電力專題",
    description: [
      "html",
      "scss 切版",
      "aos 套件",
      "文章內容 API 串接",
      "fb, line 分享文章功能串接",
      "webpack 打包"
    ],
    
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "webpack",
        color: "pink-text-gradient",
      },
    ],
    image: energy,
    gallery:[ energy_pc, energy_mb, energy_article_pc, energy_article_mb,],
    site_url: "https://money.udn.com/SSI/2022/new_energy_50/index.html",
    source_code_link: "https://github.com/",
  },
  {
    id:'3',
    name: "伺服器專題",
    description: [
      "html",
      "scss 切版",
      "aos 套件",
      "圖片及影片 lazy load",
      "文章內容 API 串接",
      "fb, line 分享文章功能串接",
      "webpack 打包"
    ],
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "webpack",
        color: "pink-text-gradient",
      },
    ],
    image: server,
    gallery:[ server_pc, server_mb, server_article_pc, server_article_mb,],
    site_url: "https://money.udn.com/SSI/2022/server_12/index.html",
    source_code_link: "",
  },
  {
    id:'4',
    name: "數位訂閱周年慶",
    description: [
      "html",
      "scss 切版",
      "播放器樣式手刻製作",
      "scratchcard-js 刮刮卡套件",
      "swiper 輪播套件",
      "會員登入判斷",
      "抽獎 API 串接",
      "webpack 打包",
    ],
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "webpack",
        color: "pink-text-gradient",
      },
    ],
    image: annual_event,
    gallery:[annual_event_pc, annual_event_mb, game, award, no_award],
    site_url: "https://money.udn.com/SSI/2022/annual_event/index.html",
    source_code_link: "https://github.com/",
  },
  {
    id:'5',
    name: "經濟日報 x 今周刊活動",
    description: [
      "html",
      "scss 切版",
      "webpack 打包",
      "slick-carousel 輪播套件",
      "JavaScript 選單開闔製作",
    ],
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "webpack",
        color: "pink-text-gradient",
      },
    ],
    image: business,
    gallery:[business_pc, business_mb],
    site_url: "https://money.udn.com/SSI/2022/businesstoday_package/index.html",
    source_code_link: "",
  },
  {
    id:'6',
    name: "新春會員活動",
    description: [
      "html",
      "scss 切版",
      "slick-carousel 輪播套件",
      "會員登入判斷",
      "抽獎 API 串接",
      "gulp 打包"
    ],
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "gulp",
        color: "pink-text-gradient",
      },
    ],
    image: spring_event,
    gallery:[ spring_event_pc, spring_event_mb,],
    site_url: "https://money.udn.com/SSI/2022/member-come-home/index.html",
    source_code_link: "",
  },
];

const sideProjectData = [
  {
    id:'11',
    name: "3D Portfolio",
    description: [
      "jsx 架構",
      "Tailwind CSS 切版",
      "framer-motion 文字進場動畫",
      "react router 路由規劃",
      "react-three-fiber 3D 模型載入",
      "Mixamo 動畫",
      "平板、手機版持續優化中"
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    gallery:[],
    site_url: "https://ivy-ho.github.io/portfolio/",
    source_code_link: "https://github.com/Ivy-Ho/portfolio",
  },
  {
    id:'12',
    name: "Sunny's Dance Club",
    description: [
      "jsx 架構",
      "react-three-fiber 3D 模型載入",
      "Mixamo 動畫",
      "請使用桌機、筆電開啟",
      "平板、手機版仍在優化中"
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "r3f",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: sunny,
    gallery:[sunny_1, sunny_2, sunny_3,],
    site_url: "https://ivy-ho.github.io/Sunny-Dance-Club/",
    source_code_link: "https://github.com/Ivy-Ho/Sunny-Dance-Club",
  },
  {
    id:'13',
    name: "迴圈 ∞ 選框 (電商網站)",
    description: [
      "html",
      "Bootstrap 4 切版",
      "Vue router 路由建構",
      "Vue Cli 專案開發",
      "ESLint 程式碼品質控管",
      "Vee Validate 表單驗證",
      "API 串接",
      "品牌、⽂案內容發想"
    ],
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "vue-cli",
        color: "pink-text-gradient",
      },
    ],
    image: foreach,
    gallery:[ foreach_products_pc, foreach_products_mb, foreach_product_pc, foreach_product_mb, foreach_checkout_pc, foreach_checkout_mb,],
    site_url: "https://ivy-ho.github.io/forEach-Frame-Shop/#/",
    source_code_link: "https://github.com/Ivy-Ho/forEach-Frame-Shop",
  },
]
export { socialLinks, technologies, experiences, projectData, sideProjectData };