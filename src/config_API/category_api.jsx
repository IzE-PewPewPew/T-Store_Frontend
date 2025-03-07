import { baseURL } from "service/baseURL";

const getCategory = async (token) => {
 
    try {
      const response = await baseURL.get("/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return error.response;
    }
  };


const getCategoryById = async (id) => {
  try {
    const response = await baseURL.get(`/category/${id}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

const createCategory = async (token, body) => {
  try {
    const response = await baseURL.post("/category", body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

const UpdateCategoryUser = async (token, id, body) => {
  try {
    const response = await baseURL.post(`/category/${id}`, body, {
      headers: {
    
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

const deleteCategory = async (token, id) => {
  try {
    const response = await baseURL.delete(`/cagetory/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }


};

export {
  getCategory,
  getCategoryById,
  createCategory,
  UpdateCategoryUser,
  deleteCategory,
};