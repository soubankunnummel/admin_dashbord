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

export const createEmployee = async (data:FormData) => {
  try {
    const res = await Axios.post("/employee",data,{
        headers:{
            'Content-Type':'multipart/form-data'
        }

    });
    if (res.status === 201) {
      return res;
    }
  } catch (error) {
    return error;
  }
};





//////////////  EDIT EMPLOYEE //////////////

export const editData = async (id:string,data:any, imagetype:string) => {
  try {
    const res = await Axios.patch(`/employee/${id}?imageType=${imagetype}`,data)
    return res
  } catch (error) {
    return error
  }
}



////////////// DELETE ///////////////

export const DeleteEmployee = async(id:string) => {
  try {
    const res = await Axios.delete(`/employee/${id}`)
    return res
  } catch (error) {
    return error
    
  }
}