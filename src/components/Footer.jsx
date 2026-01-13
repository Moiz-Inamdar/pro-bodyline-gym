const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} PRO BODYLINE GYM | Developed by Moiz <br />
       <a href="https://mail.google.com/mail/?view=cm&to=mailto:moizinamdar74@gmail.com" target="_blank"
       rel="noreferrer" className="footer-link">moizinamdar74@gmail.com</a></p>
      {/* <p className="developer-credit">Developed by Moiz</p> */}
    </footer>
  );
};

export default Footer;
