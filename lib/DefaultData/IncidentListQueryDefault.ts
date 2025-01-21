export const incidentListDefaultQuery = `query {
  incidents(order: { id: DESC }, skip: 0, take: 5) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
    items {
      id
      number
      shortDescription
      priority {
        id
        display:name
      }
      updated
      caller {
        id
        userName
        display:userName
      }
      assignmentGroup {
        id
        name
        display:name
      }
    }
  }
}`;
