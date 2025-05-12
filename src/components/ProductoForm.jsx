import React, { useEffect, useState } from "react";

const ProductoForm = ({ producto, onSave }) => {
  const [form, setForm] = useState({
    sku: "",
    nombre: "",
    precio: "",
    cantidad: "",
    imagenUrl: "",
    puntoReorden: "",
  });

  useEffect(() => {
    if (producto) {
      setForm({
        sku: producto.sku || "",
        nombre: producto.nombre || "",
        precio: producto.precio || "",
        cantidad: producto.cantidad || "",
        imagenUrl: producto.imagenUrl || "",
        puntoReorden: producto.puntoReorden || "",
      });
    } else {
      setForm({
        sku: "",
        nombre: "",
        precio: "",
        cantidad: "",
        imagenUrl: "",
        puntoReorden: "",
      });
    }
  }, [producto]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.entries(form).map(([key, value]) => (
        <div key={key}>
          <label className="block capitalize">{key}</label>
          <input
            name={key}
            value={value}
            onChange={handleChange}
            className="border p-1 w-full"
            type={
              key === "precio" || key === "cantidad" || key === "puntoReorden"
                ? "number"
                : "text"
            }
            required
            disabled={key === "sku" && producto}
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {producto ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
};

export default ProductoForm;
