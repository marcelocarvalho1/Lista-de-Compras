import { useState } from "react";
import Navbar from "./components/Navbar";
import ItemForm from "./components/ItemForm";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (name) => {
    setItems((prevItems) => [
      ...prevItems,
      { id: Date.now(), name, bought: false },
    ]);
  };

  const handleToggleBought = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <Navbar totalItems={items.length} />
      <ItemForm onAddItem={handleAddItem} />
      <ShoppingList
        items={items}
        onToggleBought={handleToggleBought}
        onRemove={handleRemoveItem}
      />
      <Footer
        totalItems={items.length}
        boughtItems={items.filter((item) => item.bought).length}
      />
    </div>
  );
};

export default App;
