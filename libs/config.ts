interface configProps {
  endpoint: string;
  method: string;
  body?: any;
  token?: string;
  queryParams?: string;
}

const Config = ({endpoint, method, body, token, queryParams}: configProps) => {
  return {
    method: method,
    url: `${process.env.REACT_APP_BASE_URL}${endpoint}${
      queryParams ? `?${new URLSearchParams(queryParams).toString()}` : ""
    }`,
    headers:
      token && token !== null
        ? {
            Authorization: "Bearer " + token.substring(1, token.length - 1),
          }
        : {
            "Content-Type": "application/json",
          },

    data: body && body,
  };
};
export default Config;
