export const PlaceholderSkip = "#skip#";
export const PlaceholderTake = "#take#";
export const PlaceholderOrderBy = "#orderByPlaceHolder#";
export const PlaceholderWhereCondition = "#wherePlaceholder#";
export const PlaceholderAllColumn = "#allColumns#";
export const incidentQueryTemplate = `query {
  incidents(order: {}, skip: ${PlaceholderSkip}, take: ${PlaceholderTake}, where: ${PlaceholderWhereCondition}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
    items {
     ${PlaceholderAllColumn}
    }
  }
}`;

export const requestQueryTemplate = `query {
  request(order: {}, skip: ${PlaceholderSkip}, take: ${PlaceholderTake}, where: ${PlaceholderWhereCondition}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
    items {
     ${PlaceholderAllColumn}
    }
  }
}`;
