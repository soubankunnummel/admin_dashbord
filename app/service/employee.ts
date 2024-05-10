import Axios from "../config/axios";

export const getEmployees = async () => {
  try {
    const res = await Axios.get("/employee");
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export const createEmployee = async (data) => {
  try {
    const res = await Axios.post("/employee",data,{
        headers:{
            'Content-Type':'multipart/form-data'
        }

    });
    if (res.status === 201) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};
