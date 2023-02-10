import { axiosInstance } from "./axios-instance";
// export const api = {
//   getUser: async () => {
//     const result = await axiosInstance.get("/user").data;
//     console.log("result is " + result);
//     return result;
//   },
// };

class Api {
  async getUser() {
    const result = (await axiosInstance.get("/user")).data;
    console.log("result is " + result);
    return result;
  }
}

export default new Api();
