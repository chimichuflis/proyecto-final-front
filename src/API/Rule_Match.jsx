import API from "./API_rules";

export const getMatches = async () => {
  let url = "/match";
  try {
    const result = await API.get(url)
    return result.data;
  } catch (err) { console.log(err) }
};

