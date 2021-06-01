const localStorageKeyName = "tagMex";


type TagMeModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => string; //success 表示成功，duplicated 表示标签名重复
  save: () => void;
};

const tagMe: TagMeModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    );
    return this.data;
  },
  create(name: string) {
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

export default tagMe;
