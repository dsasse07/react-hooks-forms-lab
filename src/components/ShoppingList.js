import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  // const [formData, setFormData] = useState({
  //   name: "",
  //   category: "Produce"
  // })
  const [stateItems, setStateItems] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(newSearch){
    setSearch(newSearch)
  }

  function handleAddItem(formData) {
    setStateItems([...stateItems, formData ])
  }

  const filteredItemsToDisplay = stateItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const itemsToDisplay = filteredItemsToDisplay.filter( item => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search} selectedCategory={selectedCategory}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
