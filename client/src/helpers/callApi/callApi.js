import formatUrl from "../formatUrl";

export const callApi = async ({
  path = {},
  params,
  body = {},
  method = "",
}) => {
  const url = formatUrl({ path, params });

  const headers = {
    Authorization: `Bearer fake_token`,
    "Content-Type": "application/json",
  };

  const options = {
    method,
    headers,
  };

  if (method !== "GET") {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  throw await response.json();
};

export default callApi;
