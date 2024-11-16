import { useState } from "react";

const ItemForm = ({ onAddItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      onAddItem(item);
      setItem("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Adicionar item"
        style={{ padding: "10px", width: "80%" }}
      />
      <button type="submit" style={{ padding: "10px", marginLeft: "10px" }}>
        Adicionar
      </button>
    </form>
  );
};

export default ItemForm;
