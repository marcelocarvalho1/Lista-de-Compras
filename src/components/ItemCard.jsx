const ItemCard = ({ item, onToggleBought, onRemove }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      margin: "10px 0",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    }}
  >
    <input
      className="InputItem"
      type="checkbox"
      checked={item.bought}
      onChange={() => onToggleBought(item.id)}
      style={{ marginRight: "10px" }}
    />
    <span
      style={{
        textDecoration: item.bought ? "line-through" : "none",
        wordWrap: "break-word",
        width: "60%",
        whiteSpace: "normal",
      }}
    >
      {item.name}
    </span>
    <button
      onClick={() => onRemove(item.id)}
      style={{
        marginLeft: "auto",
        padding: "5px",
        backgroundColor: "#FF4136",
        color: "#fff",
      }}
    >
      Remover
    </button>
  </div>
);

export default ItemCard;
