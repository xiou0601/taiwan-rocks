// 岩石資料清單：首頁卡片與頁面順序都以此為準。
// 新增岩石時加在陣列最後。type 只能是 igneous / sedimentary / metamorphic。
const ROCKS = [
  {
    id: "basalt",
    name: "玄武岩",
    en: "Basalt",
    type: "igneous",
    summary: "岩漿噴出地表快速冷卻形成的深色岩石，澎湖的招牌風景。"
  },
  {
    id: "sandstone",
    name: "砂岩",
    en: "Sandstone",
    type: "sedimentary",
    summary: "由砂粒堆積、壓密、膠結而成，野柳的奇岩怪石就是它。"
  },
  {
    id: "marble",
    name: "大理岩",
    en: "Marble",
    type: "metamorphic",
    summary: "石灰岩受高溫高壓再結晶而成，太魯閣峽谷的主角。"
  },
  {
    id: "andesite",
    name: "安山岩",
    en: "Andesite",
    type: "igneous",
    summary: "灰色帶白斑點的火山岩，陽明山大屯火山群的主要岩石。"
  }
];

const TYPE_LABEL = {
  igneous: "火成岩",
  sedimentary: "沉積岩",
  metamorphic: "變質岩"
};
