import { useState } from "react";
import { useForm } from "react-hook-form";

function LabShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ productname: "", quantity: 0 });

  function handleChange(e) {
    console.log(e.target.value);
    setFormData((currData) => ({
      ...currData,
      [e.target.name]: e.target.value,
    }));
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  function handleNewSubmit() {
    console.log("submit");
    addItem(formData);
    setFormData({ productname: "", quantity: 0 });
  }

  const registerOptions = {
    productname: {
      required: "Cannot be empty",
    },
    quantity: {
      required: "Cannot be left empty",
      min:{
        value:1,
        message:"not below 1"
      }
    },
  };

  return (
    <form onSubmit={handleSubmit(handleNewSubmit)}>
      <label htmlFor="product">Product:</label>
      <input
        type="text"
        placeholder="Product Name"
        id="product"
        name="productname"
        value={formData.productname}
        {...register("productname", registerOptions.productname)}
        onChange={handleChange}
      />
      <p>{errors.productname?.message}</p>

      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        placeholder="1"
        name="quantity"
        id="quantity"
        value={formData.quantity}
        {...register("quantity", registerOptions.quantity)}
        onChange={handleChange}
      />
      <p>{errors?.quantity && errors.quantity.message}</p>

      <button type="submit">Add To List</button>
    </form>
  );
}

export default LabShoppingListForm;
