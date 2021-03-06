﻿import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { NavIcon, QueryIcon } from "components/links";

export function TableTitle({ logicKey, children }) {
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item>
        <Grid container direction="row">
          <Typography variant="h4" color="textSecondary">
            {children}
          </Typography>
          <QueryIcon logicKey={logicKey}>search</QueryIcon>
          <NavIcon to={"/add/" + logicKey}>add</NavIcon>
        </Grid>
      </Grid>
      <Grid item>
        <NavIcon to={"/wall/" + logicKey}>grid_on</NavIcon>
      </Grid>
    </Grid>
  );
}

TableTitle.propTypes = {
  logicKey: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
