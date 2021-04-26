const queryString = require("query-string");

export default ({ path, params }) => {
  const queryParams = queryString.stringify(
    {
      ...params,
    },
    {
      arrayFormat: "comma",
    }
  );
  return `${process.env.API_BASE_URL}/${path}?${queryParams}`;
};
