import { ColumnConfig } from "../Models/ColumnConfigModel";

export const IncidentDefaultColumnConfig: ColumnConfig[] = [
  {
    name: "Id",
    queryG: "number",
  },
  {
    name: "Active",
    queryG: "active",
  },
  { name: "Opened", queryG: `opened` },
  {
    name: "Short description",
    queryG: "shortDescription",
  },
  {
    name: "Caller",
    queryG: "caller{name id}",
  },
  { name: "Priority ", queryG: `priority {name}` },
  { name: "State ", queryG: `state {name}` },
];
