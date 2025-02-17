import { ColumnConfig } from "@/lib/Models/ColumnConfigModel";

export const RequestsDefaultColumnConfig: ColumnConfig[] = [
  {
    name: "Id",
    queryG: "number",
  },
  { name: "Opened", queryG: `opened` },
  { name: "State ", queryG: `state {name}` },
  {
    name: "Short description",
    queryG: "shortDescription",
  },
  { name: "OpenedBy ", queryG: `openedBy {name}` },
  { name: "Urgency ", queryG: `urgency {status}` },
];
