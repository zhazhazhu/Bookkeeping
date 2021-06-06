import { RecordItem } from '../types/index';

const localStorageKeyName = "recordList";

const model = {
  clone<x>(data:x):x{
    return JSON.parse(JSON.stringify(data))
  },
  fetch(): RecordItem[] {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
  },
  save(data: RecordItem[]): void {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  },
};

export default model;
