import work_web1_L from "./../assets/images/work/l/1.png";
import work_web2_L from "./../assets/images/work/l/2.png";
import work_web3_L from "./../assets/images/work/l/3.png";
import work_web4_L from "./../assets/images/work/l/4.png";

import work_web1_M from "./../assets/images/work/m/1.png";
import work_web2_M from "./../assets/images/work/m/2.png";
import work_web3_M from "./../assets/images/work/m/3.png";
import work_web4_M from "./../assets/images/work/m/4.png";

import work_web1_bg from "./../assets/images/work/bg1.png";
import work_web2_bg from "./../assets/images/work/bg3.png";
import work_web3_bg from "./../assets/images/work/bg2.png";
import work_web4_bg from "./../assets/images/work/bg4.png";

import work_web1_demo from "./../assets/images/work/demo1.png";
import work_web2_demo from "./../assets/images/work/demo2.png";
import work_web3_demo from "./../assets/images/work/demo4.png";
import work_web4_demo from "./../assets/images/work/demo3.png";

import work_web1_flow from "./../assets/images/work/flow.svg";
import work_web1_sus from "./../assets/images/work/sus.svg";

const worksData = [
  {
    index: 0,
    name: "《臺北市市民服務大平台》",
    name_info: "改造政府網站",
    color: "#7acfc9",
    website:
      "https://peiyunlee.github.io/Ray4.0_TaipeiCitizenServicePlatform/#/",
    main: {
      info: "唐鳳政委辦公室公共數位創新空間<br>公部門網頁改版計畫 - RAY4.0",
      tag: ["UX研究", "UI設計", "前端程式"],
      img: [work_web1_L, work_web1_M],
    },
    info: {
      bg: work_web1_bg,
      demo: work_web1_demo,
      tag: [
        ["#UX", "#Figma", "#React"],
        ["#部會合作", "#遠端工作", "#獨立開發網頁"],
      ],
      button: ["RAY 4.0", "https://ray.pdis.nat.gov.tw/"],
      content: [
        {
          p:
            "在大三的暑假，我參與了由<span>行政院PDIS部門所舉辦的「青年學生體檢政府網站計畫」</span>— 專注在使用者，改善政府網站的易用性與體驗。",
        },
        { img: work_web1_flow },
        {
          p:
            "經過<span>使用者研究</span>後，我們聚焦了「臺北市政府市民服務大平台」1400項服務裡的<span>公有場地租借服務</span>，定義網站的核心議題(HMW)，並延伸出三大設計方向—<span>效率尋找、資訊呈現、流程優化</span>，接著將設計原型經過易用性測試持續迭代，最後<span>實作出明確提升易用性的改版網站</span>。",
        },
        { h: "- SUS易用性分數 -", img: work_web1_sus },
      ],
    },
  },
  {
    index: 1,
    name: "《呷蝦咪》",
    name_info: "外賣點餐平台",
    color: "#EDC39A",
    website: "https://test-firestore-847fa.firebaseapp.com/",
    main: {
      info: "跨平台前後端課程 - 期末專題",
      tag: ["UI設計", "前端程式", "後端Firebase"],
      img: [work_web2_L, work_web2_M],
    },
    info: {
      bg: work_web2_bg,
      demo: work_web2_demo,
      tag: [
        ["#AI", "#RWD", "#Vue", "#Firebase"],
        ["#網頁刻板", "#後端資料串接渲染"],
      ],
      content: [
        {
          p:
            "提供店家外賣服務，以及顧客點餐的外賣點餐平台。消費者可以選擇商家進行點餐，店家可以登入註冊進行菜單編輯、瀏覽訂單。",
        },
        {
          h: "- 統合各店家的資訊 -",
          p:
            "讓消費者能在短時間之內瀏覽數個店家的菜單，並在瀏覽完畢後進行訂餐的動作。",
        },
        {
          h: "- 簡化店家的上架流程 -",
          p:
            "讓一般店家不需專業的背景知識便可輕鬆使用本網站，進行即時的菜單編輯、訂單接收。",
        },
      ],
    },
  },
  {
    index: 2,
    name: "《Multic》",
    name_info: "音樂科普網站",
    color: "#CBADE2",
    website: "https://peiyunlee.github.io/Web_F2E_Multic/",
    main: {
      info: "網頁前端設計與開發 - 期末專題",
      tag: ["前端程式"],
      img: [work_web3_L, work_web3_M],
    },
    info: {
      bg: work_web3_bg,
      demo: work_web3_demo,
      tag: [
        ["#RWD", "#Js", "#Css-Anim", "#GSAP"],
        ["#Lottie", "#網頁刻板", "#網頁動畫"],
      ],
      content: [
        {
          p:
            "統整各個流行樂派的資料與歷史、解說專有名詞，並列出每個樂派的音樂代表作節錄，讓尋找音樂靈感的目標客戶可以進行播放聆聽。",
        },
        {
          h: "- multiple + city = Multic -",
          p: " 每個流派都是獨立的城市或是小島，呈現每個樂派的風格以及特色。",
        },
        {
          h: "- 音樂律動感 -",
          p:
            "利用視覺上的立體感加上多樣的網頁互動動畫，傳達音樂的律動和旋律感。",
        },
      ],
    },
  },
  {
    index: 3,
    name: "《WELF》",
    name_info: "遊戲官網",
    color: "#90B9FF",
    website: "https://peiyunlee.github.io/Web_F2E_WELF/",
    main: {
      info: "網頁前端設計與開發 - 期末專題",
      tag: ["UI設計", "前端程式", "後端Firebase"],
      img: [work_web4_L, work_web4_M],
    },
    info: {
      bg: work_web4_bg,
      demo: work_web4_demo,
      tag: [
        ["#RWD", "#Js", "#Css-Anim", "#GSAP"],
        ["#Lottie", "#網頁刻板", "#網頁動畫"],
      ],
      content: [
        {
          p:
            "幫大二時做的遊戲 —「WELF水精靈」做了遊戲官網，藉由遊戲官網去更詳細的介紹背後的故事背景與角色們的故事。",
        },
        {
          h: "- 促進用戶了解遊戲 -",
          p:
            "在網站中增加許多具遊戲感的互動動畫體驗遊戲的視覺，並大量使用遊戲中的色彩、元素。",
        },
      ],
    },
  },
];

export default worksData;
