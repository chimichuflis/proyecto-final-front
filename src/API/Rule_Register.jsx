import API from "./API_rules";

export const register = async (email, profile, password) => {
  let url = "/user/register";
  try {
    const result = await API.post(url, { email: email, password: password, profile: profile })
    return result.data;
  } catch (err) { console.log(err) }
};

