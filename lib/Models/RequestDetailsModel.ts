export interface RequestDetailsModel {
  request: RequestModel;
}

export interface RequestModel {
  items: Item[];
}

export interface Item {
  number: string;
  item: Item2;
  requestIds: string;
  requestedFor: RequestedFor;
  location: Location;
  businessUnit: BusinessUnit;
  configurationItem: DefaultRequestModel;
  opened: string;
  openedBy: OpenedBy;
  stage: Stage;
  state: State;
  assignmentGroup: AssignmentGroup;
  assignedTo: AssignedTo;
  impact: Impact;
  urgency: Urgency;
  priority: Priority;
  approval: Approval;
  contactType: ContactType;
  shortDescription: string;
  description: string;
  comments: string;
  workNotes: string;
}

export interface DefaultRequestModel {
  name: string;
}

export interface Item2 {
  name: string;
}

export interface RequestedFor {
  name: string;
}

export interface Location {
  name: string;
}

export interface BusinessUnit {
  name: string;
}

export interface OpenedBy {
  name: string;
}

export interface Stage {
  name: string;
}

export interface State {
  name: string;
}

export interface AssignmentGroup {
  name: string;
}

export interface AssignedTo {
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

export interface Approval {
  name: string;
}

export interface ContactType {
  name: string;
}
