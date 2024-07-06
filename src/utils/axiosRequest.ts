import axios from "axios";

const base_URL = "https://graphql.anilist.co";

export const axiosRequest = async <T, D>(
  query: string,
  variables: T
): Promise<D> => {
  const options = {
    method: "post",
    url: base_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      query,
      variables,
    },
  };

  try {
    const resp: D = await axios(options);
    return resp;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
