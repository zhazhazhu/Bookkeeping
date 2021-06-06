import { tag } from "@/models/tagAllModel";

export type RecordItem = {
  tag: tag;
  notes: string;
  type: string;
  numbers: string;
  createdAt?: string;
};

export type RootState ={
  recordList:RecordItem[]
}

export type Tag = {
  id: string;
  name: string;
}