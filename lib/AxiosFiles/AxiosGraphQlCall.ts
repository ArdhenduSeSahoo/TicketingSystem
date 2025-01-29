import axios from "axios";
import { API_Base_URL, Api_URL_Graphql } from "../DefaultData/BaseURLs";
import { Agent } from "https";

export const graphQlAxios = axios.create({
  baseURL: Api_URL_Graphql,
  method: "post",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  httpsAgent: new Agent({
    rejectUnauthorized: false,
  }),
});

export const Api_Axios_Post_Request_Creater = axios.create({
  baseURL: API_Base_URL,
  method: "post",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  httpsAgent: new Agent({
    rejectUnauthorized: false,
  }),
});

export const Api_Axios_Get_Request_Creater = axios.create({
  baseURL: API_Base_URL,
  method: "get",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  httpsAgent: new Agent({
    rejectUnauthorized: false,
  }),
});

export const AxiosGraphQlPostCall = async (query: string) => {
  // let retval = null;
  // try {
  //   retval = await graphQlAxios
  //     .post("", { query: query })
  //     .then((response) => ({ response }))
  //     .catch((error) => ({ error }));
  // } catch (error) {
  //   console.log(error);
  // }

  await fetch("http://192.168.0.79/ESNOW/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({ query: query }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res.data));
  return await fetch("http://192.168.0.79/ESNOW/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: query }),
  })
    .then((res) => res.json())
    .catch((error) => ({ error }));

  // return await graphQlAxios
  //   .post("", { query: query })
  //   .then((response) => ({ response }))
  //   .catch((error) => ({ error }));
};

export const Api_PostCall = async (Endpoint: string, query: string) => {
  return await Api_Axios_Post_Request_Creater.post(Endpoint, query)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export const Api_Get_Call = async (Endpoint:string,queryAsJSON: string) => {
  axios
    .get(Endpoint, {
      params: queryAsJSON,
    })
    .then((resp) => {
      console.log(resp);
    });
  return await Api_Axios_Get_Request_Creater.get(Endpoint, {
    params: queryAsJSON,
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export function hasResponseError(response: any): string {
  let errorlist = "";
  if (response?.data.errors) {
    (response?.data.errors as Array<any>).forEach((element) => {
      errorlist += element.message;
    });
  }
  return errorlist;
}
