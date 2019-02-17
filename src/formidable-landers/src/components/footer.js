import PropTypes from "prop-types";
import React from "react";

// Assets
import LOGO from "../assets/logo.svg";
import LOGO_GITHUB from "../assets/logo-github.svg";
import LOGO_TWITTER from "../assets/logo-twitter.svg";
// Styles
import styles from "../styles/footer.css"; //eslint-disable-line

class Footer extends React.Component {
  render() {
    let classes = "formidableFooter";
    if (this.props.theme === "light") {
      classes = `${classes} isLight`;
    } else {
      classes = `${classes} isDark`;
    }
    if (this.props.className) {
      classes = `${classes} ${this.props.className}`;
    }

    return (
      <footer className={classes}>
        <div className="formidableFooter-container">
          {this.props.children}
          <a
            className="formidableFooter-logo-link"
            href="https://formidable.com/"
            target="_blank"
          >
            <img className="formidableFooter-logo" src={LOGO} />
          </a>
          {this.props.trademark}
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  trademark: PropTypes.node
};

const defaultFooterChildren = (
  <div className="default">
    <a href="https://formidable.com/contact/">Contact</a>
    <a href="https://formidable.com/careers/">Careers</a>
    <a href="https://twitter.com/FormidableLabs">
      <img src={LOGO_TWITTER} />
    </a>
    <a href="https://github.com/FormidableLabs/">
      <img src={LOGO_GITHUB} />
    </a>
  </div>
);

Footer.defaultProps = {
  children: defaultFooterChildren,
  className: "",
  theme: "dark",
  trademark: null
};

export default Footer;
