import ItemCard from "./ItemCard";

const ShoppingList = ({ items, onToggleBought, onRemove }) => (
  <div>
    {items.map((item) => (
      <ItemCard
        key={item.id}
        item={item}
        onToggleBought={onToggleBought}
        onRemove={onRemove}
      />
    ))}
  </div>
);

export default ShoppingList;
