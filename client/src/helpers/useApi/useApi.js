import { useMutation, useQuery } from "react-query";
import callApi from "../callApi";

export const query = ({ key, path, params = {}, retry = 3, condition }) =>
  useQuery(
    key,
    async () => {
      if (condition) {
        const response = await callApi({
          path,
          params,
          method: "GET",
        });
        return response;
      }
      return null;
    },
    { retry }
  );

export const mutation = ({ path, method = "", params = {}, ...props }) =>
  useMutation(
    async ({ body }) => {
      const response = await callApi({
        path,
        params,
        body,
        method,
      });

      return response;
    },
    {
      ...props,
    }
  );
