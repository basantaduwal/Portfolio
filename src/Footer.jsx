import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#d5d4ce",
        padding: "20px",
        textAlign: "center",
        borderTop: "1px solid #b0b0b0",
      }}
    >
      <p className="footer-p">© {new Date().getFullYear()} Basanta. All rights reserved.</p>
    </footer>
  );
}

export default Footer;