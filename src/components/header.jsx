import PropTypes from "prop-types";
import React from "react";
import DescriptionIcon from '@material-ui/icons/Description';
import Grid from '@material-ui/core/Grid';
import Logo from '../images/kaamer_light.svg';

const Header = ({ siteTitle }) => {

    return (
        <header
          style={{
              background: `#36454F`,
              padding: `0.2em`,
              color: `white`,
          }}
        >
          <Grid container>
            <Grid item xs={12} style={{"text-align": "center"}}>
              <a href="#" style={{color: `white`, textDecoration: `none`}}>
                <h1 style={{margin: `0 auto`}}>
                  <img
                    src={Logo}
                    alt={siteTitle}
                    style={{width: "60px", "margin-bottom": "0px !important", "vertical-align": "middle"}}
                  /> Repository
                      </h1>
              </a>
            </Grid>
          </Grid>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
