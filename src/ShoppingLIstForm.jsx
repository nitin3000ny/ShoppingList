import { useState } from "react";
function ShoppingListForm({ addItem }) {
	const [formData, setFormData] = useState({ productname: "", quantity:0 });
	function handleChange(e) {
		// e.preventDefault();
		console.log(e.target.value);
		setFormData((currData) => {
			return {
				...currData,
				[e.target.name]: e.target.value,
			};
		});
	}
	function handleSubmit(e) {
		e.preventDefault();
		console.log("submit");
		addItem(formData);
		setFormData({ productname: "", quantity:0 });
	}
	return (
		<form onSubmit={handleSubmit}>
			 
			<label htmlFor="product">Product:</label>
			<input
				type="text"
				placeholder="Product Name"
				id="product"
				name="productname"
				value={formData.productname}
				onChange={handleChange}
			/>
			<label htmlFor="quantity">Quantity</label>
			<input
				type="number"
				placeholder="1"
				name="quantity"
				id="quantity"
				value={formData.quantity}
				onChange={handleChange}
			/>
			<button>Add To List</button>
		</form>
	);
}
export default ShoppingListForm;
