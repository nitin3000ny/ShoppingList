import LabShoppingListForm from "./LabShoppingListForm";
import{v4 as uuid} from 'uuid'
import { useState } from "react"
import './ShoppingList.css'
export default function ShoppingList(){
   const [items,setItems]=useState([
        
    ]);
    function addData(item){
        setItems(curr=>{
            return [...curr,{...item,id:uuid()}];
        });
        };
    return (
        <div><ul className="ShoppingList.css">
     { items.map(i => <li key={uuid()}>{i.productname} - {i.quantity}</li>
        )}
    </ul>
    <LabShoppingListForm addItem={addData}/>
    </div>)
}