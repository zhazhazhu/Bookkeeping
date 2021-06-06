import { tag } from "./tagAllModel";
import { defaultTags } from "../Tags";

type TagListModel = {
  data: tag[];
  fetch: () => tag[];
  create: (name: tag) => string; //success 表示成功，duplicated 表示标签名重复
  save: () => void;
  init: () => void;
};

const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem("tagList") || "[]");
    return this.data;
  },
  create(name: tag) {
    if (this.data.indexOf(name) >= 0) {
      return "duplicated";
    }
    this.data.push(name);
    this.save();
    return "success";
  },
  save() {
    window.localStorage.setItem("tagList", JSON.stringify(this.data));
  },
  init() {
    if (this.data.length === 0) {
      this.data = defaultTags;
    }
    this.save();
  },
};
export default tagListModel;
