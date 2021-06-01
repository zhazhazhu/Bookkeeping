import { tag } from "@/models/tagAllModel";

export type RecordItem = {
  tag: tag;
  notes: string;
  type: string;
  numbers: string;
  createdAt: Date | undefined;
};
