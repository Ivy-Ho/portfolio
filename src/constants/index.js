import {
  github,
  medium,
  linkedin,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
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
  {
    name: 'linkedin',
    img: linkedin,
    url: "",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "webpack",
  //   icon: webpack,
  // },
  {
    name: "vite",
    icon: vite,
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
    date: "November 2020 - March 2023",
    points: [
      "擔任「經濟日報」助理前端工程師。",
      "主要負責經濟日報平台頁面切版、功能製作、api 資料串接，並協助後端 php 套版，後續也負責此平台的維護與更新。",
      "另負責新聞專題頁、活動頁製作。",
      "兩年間對純 CSS 與 JavaScript 有了更深入的掌握與了解。"
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
      "後續以 Vue.js + Bootstrap 為主要開發框架，製作出面試作品。"
    ],
  },
  {
    title: "行銷專員、業務專員 (1 year)",
    company_name: "政伸企業股份有限公司",
    icon: transart,
    iconBg: "#383E56",
    date: "March 2018 - March 2019",
    points: [
      "於行銷部負責參展相關聯繫事宜，也負責整理、更新公司產品規格表，進而熟悉產品製程及特性。",
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
    description:
      "歷經平台翻新改版，改為會員訂閱制，負責經濟日報平台頁面切版、功能製作(首頁、VIP頁、各類別頁、文章頁、產業資料庫) / 協助後端 php 套版、串接 api / 後續維護網站至 2023 年 2 月",
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
    description:
      "html, scss 切版 / aos 套件 / 文章內容 API 串接 / fb, line 分享文章功能串接 / webpack 打包",
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
    description:
      "html, scss 切版 / aos 套件 / 圖片及影片 lazy load / 文章內容 API 串接 / fb, line 分享文章功能串接 / webpack 打包",
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
    description:
      "html, scss 切版 / 播放器樣式手刻製作 / scratchcard-js 刮刮卡套件 / swiper 輪播套件 / 會員登入判斷 / 抽獎 API 串接 / webpack 打包",
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
    description:
      "html, scss 切版 / webpack 打包 / slick-carousel 輪播套件 / JavaScript 選單開闔製作",
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
    description:
      "html, scss 切版 / slick-carousel 輪播套件 / 會員登入判斷 / 抽獎 API 串接 / gulp 打包",
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
    description:
      "HTML, Tailwind CSS 切版 / framer-motion 文字進場動畫 / react router 路由規劃 / react-three-fiber 3D 模型載入",
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
    site_url: "",
    source_code_link: "https://github.com/",
  },
  {
    id:'12',
    name: "Sunny's Dance Club",
    description:
      "先勾選右上角控制器的 bgm 選項，開啟背景音樂 / 再透過第一項動畫下拉選單，選擇不同舞風，欣賞 Sunny 為您帶來不同的表演",
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
]
export { socialLinks, technologies, experiences, projectData, sideProjectData };