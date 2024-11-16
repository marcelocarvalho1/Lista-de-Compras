const Footer = ({ totalItems, boughtItems }) => (
  <footer
    style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f0f0f0" }}
  >
    <p>Total de itens: {totalItems}</p>
    <p>Itens comprados: {boughtItems}</p>
  </footer>
);

export default Footer;
