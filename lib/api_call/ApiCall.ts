import { API_Base_URL, Api_URL_Graphql } from "../DefaultData/BaseURLs";
import {
  ApiResponsErrorModel,
  ApiResponsModel,
} from "../Models/ApiResponsModel";

export function ApiCall_GraphQl(query: string) {
  return fetch(Api_URL_Graphql, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({ query: query }),
  })
    .then((response) => response.json())
    .catch((error) => error.json());
}
function isApiResponsErrorModel(
  object: ApiResponsModel | ApiResponsErrorModel,
): object is ApiResponsErrorModel {
  return "errors" in object;
}

export function hasGQResponseError(
  response: ApiResponsModel | ApiResponsErrorModel,
): string {
  let errorlist = "";

  if (isApiResponsErrorModel(response))
    if (response?.errors) {
      (response?.errors as Array<{ message: string }>).forEach((element) => {
        errorlist += element.message;
      });
    }
  return errorlist;
}

export function ApiCall_Post(Endpoint: string, query: string) {
  try {
    return fetch(API_Base_URL + Endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: query,
    })
      .then((response) => response.json())
      .catch((error) => error)
      .finally(() => "{}");
  } catch (error) {
    console.log(error);
  }
}

export function ApiCall_Get(Endpoint: string, query: string) {
  try {
    return fetch(API_Base_URL + Endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: query,
    })
      .then((response) => response.json())
      .catch((error) => error.json());
  } catch (error) {
    console.log(error);
  }
}
