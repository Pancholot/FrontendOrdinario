import { instance } from "./axiosInstance";

// Products

//READ ALL PRODUCTS
const getProducts = async () => {
    try {
      const response = await instance.get("/productos");
      return response.data;
    } catch (error) {
      console.error("error en getProducts:", error);
    }
  };
  
// READ BY SKU
const getProduct = async (sku) => {
try {
    const response = await instance.get(`/productos/${sku}`);
    return response.data;
} catch (error) {
    console.error("error en getProduct:", error);
}
};

// CREATE
const createProduct = async (producto) => {
try {
    const response = await instance.post("/productos", producto);
    return response.data;
} catch (error) {
    console.error("error en createProduct:", error);
}
};

// UPDATE
const updateProduct = async (sku, producto) => {
try {
    const response = await instance.put(`/productos/${sku}`, producto);
    return response.data;
} catch (error) {
    console.error("error en updateProduct:", error);
}
};

// DELETE 
const deleteProduct = async (sku) => {
try {
    const response = await instance.delete(`/productos/${sku}`);
    return response.data;
} catch (error) {
    console.error("error en deleteProduct:", error);
}
};

// Orders

const procesarPedido = async (productos) => {
  try {
    const response = await instance.put("/pedidos", { productos });
    return response.data;
  } catch (error) {
    console.error("error en procesarPedido:", error);
    throw error;
  }
};


//Forms

//POST
const sendForm = async (form) => {
    try {
      const response = await instance.post("/forms", { form });
      return response.data;
    } catch (error) {
      console.error("error en sendForm:", error);
      throw error;
    }
  };
  
//Users

// REGISTER
const registerUser = async (usuario) => {
    try {
      const response = await instance.post("/usuarios/registrar", usuario);
      return response.data;
    } catch (error) {
      console.error("error en registerUser:", error);
      throw error;
    }
  };
  
  // LOGIN
  const loginUser = async (credenciales) => {
    try {
      const response = await instance.post("/usuarios/login", credenciales);
      return response.data;
    } catch (error) {
      console.error("error en loginUser:", error);
      throw error;
    }
  };


export { getProduct, getProducts, createProduct, updateProduct, deleteProduct, sendForm, registerUser, loginUser, procesarPedido };



