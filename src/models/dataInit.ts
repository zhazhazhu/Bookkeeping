import tagListModel from "./tagListModel";
tagListModel.init();

const defaultRecords = [
  {
    tag: { name: "食物", type: "foot", default: true },
    notes: "",
    type: "-",
    numbers: "666",
    createdAt: "2021-06-06T09:08:17.852Z",
  },
  {
    tag: { name: "住房", type: "house", default: true },
    notes: "",
    type: "-",
    numbers: "238",
    createdAt: "2021-06-06T09:12:31.267Z",
  },
  {
    tag: { name: "出行", type: "travel", default: true },
    notes: "打车",
    type: "-",
    numbers: "21",
    createdAt: "2021-06-06T09:12:39.883Z",
  },
  {
    tag: { name: "食物", type: "foot", default: true },
    notes: "搓一顿",
    type: "+",
    numbers: "25",
    createdAt: "2021-06-06T09:13:10.245Z",
  },
];
const records: [] = JSON.parse(localStorage.getItem("recordList") || "[]");
if (records.length === 0) {
  localStorage.setItem("recordList", JSON.stringify(defaultRecords));
}
