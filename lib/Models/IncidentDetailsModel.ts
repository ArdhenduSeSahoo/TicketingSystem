export interface Incidents {
  items: Item[];
}

export interface IncidentsDetailsModel {
  incidents: Incidents;
}

export interface Item {
  number: string;
  caller: Caller;
  location: DefaultTicketModel;
  ownerGroup: OwnerGroup;
  owner: DefaultTicketModel;
  operationalTier2: OperationalTier2;
  operationalTier1: OperationalTier1;
  service: string;
  configurationItem: ConfigurationItem;
  createdby: Createdby;
  openedby: Openedby;
  channel: Channel;
  state: State;
  onholdreason: string;
  impact: Impact;
  urgency: Urgency;
  priority: Priority;
  productTier1: productTier;
  productTier2: productTier;
  assignmentGroup: AssignmentGroup;
  assignedTo: DefaultTicketModel;
  description: string;
  shortDescription: string;
  worknotes: string;
  comments: string;
}

export interface DefaultTicketModel {
  name: string;
}

export interface Caller {
  name: string;
}

export interface OwnerGroup {
  name: string;
}

export interface OperationalTier2 {
  name: string;
}

export interface OperationalTier1 {
  name: string;
}

export interface productTier {
  name: string;
}

export interface ConfigurationItem {
  name: string;
}

export interface Createdby {
  name: string;
}

export interface Openedby {
  name: string;
}

export interface Channel {
  name: string;
}

export interface State {
  name: string;
}

export interface Impact {
  status: string;
}

export interface Urgency {
  status: string;
}

export interface Priority {
  name: string;
}

export interface AssignmentGroup {
  name: string;
}
