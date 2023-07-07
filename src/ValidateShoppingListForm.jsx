import { useState } from "react";
function ValidateShoppingListForm({ addItem }) {
	const [formData, setFormData] = useState({ productname: "", quantity: 0 });
	const [productIsValid, setProductIsValid] = useState(false);
	const [quantityIsValid, setQuantityIsValid] = useState(false);
	const validate = (product) => {
		if (product.length === 0) {
			setProductIsValid(false);
		} else {
			setProductIsValid(true);
		}
	};
	const validateQuantity = (quantity) => {
		if (parseInt(quantity) < 1) {
			setQuantityIsValid(false);
		} else {
			setQuantityIsValid(true);
		}
	};
	function handleChange(e) {
		// e.preventDefault();
		if (e.target.name === "productname") {
			validate(e.target.value);
		}
		if (e.target.name === "quantity") {
			validateQuantity(e.target.value);
		}
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
		if (productIsValid && quantityIsValid) {
			console.log("submit");
			addItem(formData);
			setFormData({ productname: "", quantity: 0 });
		}
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
			{!productIsValid && (
				<p style={{ color: "red" }}>Product Name Cant be Empty</p>
			)}
			<label htmlFor="quantity">Quantity</label>
			<input
				type="number"
				placeholder="1"
				name="quantity"
				id="quantity"
				value={formData.quantity}
				onChange={handleChange}
			/>
			{!quantityIsValid && (
				<p style={{ color: "red" }}>Quantity cant be zero</p>
			)}
			<button disabled={!productIsValid && !quantityIsValid}>Add To List</button>
		</form>
	);
}
export default ValidateShoppingListForm;
