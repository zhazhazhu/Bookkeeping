import { RecordItem } from "./types/index";

const localStorageKeyName = "recordList";

const model = {
  fetch(): RecordItem[] {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
  },
  save(data: RecordItem[]): void {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  },
};

export default model;
