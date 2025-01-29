export interface ApiResponsModel {
  data: {
    incidents: object;
    request: object;
    customFilterRequest: {
      items: object;
    };
    customFilterIncident: {
      items: object;
    };
    filterTable: {
      items: [];
    };
  };
}
export interface ApiResponsErrorModel {
  errors: object;
}
