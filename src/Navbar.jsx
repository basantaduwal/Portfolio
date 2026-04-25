function Navbar() {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      backgroundColor: "#d5d4ce",
      color: "#000000",
      borderBottom: "1px solid #b0b0b0",
      position: "sticky",
      top: 0,
      width: "100%",
    },

    name: {
      fontSize: "22px",
      fontWeight: "bold",
      backgroundColor: "transparent",
    },

    ul: {
      listStyle: "none",
      display: "flex",
      gap: "25px",
      alignItems: "center",
      backgroundColor: "transparent",
    },

    link: {
      curser: "pointer",
      transition: "0.3",
      backgroundColor: "transparent",
    },
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.name}>Portfolio.</h2>
      <ul style={styles.ul}>
        <li style={styles.link}>
          <a href="#home"></a>Home
        </li>
        <li style={styles.link}>
          <a href="#about"></a>About
        </li>
        <li style={styles.link}>
          <a href="#projects"></a>Projects
        </li>
        <li style={styles.link}>
          <a href="#contact"></a>Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;