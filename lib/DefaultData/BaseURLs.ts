export const BaseURL = "https://ticketingsystemapi.azurewebsites.net";
//"https://localhost:7298";
//"https://essplsnowapi.com:8091";
//"https://192.168.7.71:8091";
//"https://localhost:8091";
//"https://ticketingsystemapi.azurewebsites.net";
//"http://192.168.0.79/ESNOW";
//"https://192.168.29.52:8091";
//"https://192.168.7.71:8091";
//localhost

const Api_url_part = "/api";

export const Api_URL_Graphql = `${BaseURL}/graphql/`;
//localhost
export const API_Base_URL = `${BaseURL + Api_url_part}`;
const botControler = "/BotQuery";
export const EndPoint_Azure_Prediction = `${botControler}/AzureCLUPrediction`;
export const EndPoint_GetChartData_By_X_axis_Parameter = `${botControler}/GetChartDataByXaxisParameter`;
