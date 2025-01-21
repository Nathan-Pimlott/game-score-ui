import axios from "axios";

export async function get(path: string, data?: any) {
  const res = await axios.get(`/api` + path, data);
  console.log({ res });

  if (res.status !== 200) {
    return {
      error: res.statusText,
      code: res.status,
      data: null,
    };
  }

  return {
    error: false,
    code: res.status,
    data: res.data,
  };
}
