import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import gatsbyLogo from "../images/gatsby-icon.png"

const HeaderWrapper = styled.div`
  background: #524763;
  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1rem;
    display: flex;
    align-items: center;
  }
  img {
    margin-bottom: 0;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            src={gatsbyLogo}
            alt="gatsby logo"
            style={{
              width: "80px",
            }}
          />
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
