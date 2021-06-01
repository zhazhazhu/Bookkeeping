const localStorageKeyName = "tagAll";

export type tag = {
  name?: string;
  type?: string;
};

type TagListModel = {
  data: tag[];
  fetch: () => tag[];
  create: (name: tag) => string; //success 表示成功，duplicated 表示标签名重复
  save: () => void;
};

const tagAll: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    );
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
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
};

export default tagAll;
