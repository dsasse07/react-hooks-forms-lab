import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit }) {

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "Produce"
  })

  const {name, category} = formData

  function handleFormSubmit(event){
    event.preventDefault()
    if (name) {
      onItemFormSubmit( {...formData, id:uuid() })
    }
    setFormData({
      id: "",
      name: "",
      category: "Produce"
    })
  }

  function handleFormChange(event){
    const key = event.target.name
    const value = event.target.value
    setFormData({...formData, [key]:value })
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleFormChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
