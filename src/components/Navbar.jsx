const Navbar = ({ totalItems }) => (
  <nav style={{ padding: "10px", backgroundColor: "#007BFF", color: "#fff" }}>
    <h1>Lista de Compras</h1>
    <p>Total de itens: {totalItems}</p>
  </nav>
);

export default Navbar;
