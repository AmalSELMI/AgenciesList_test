import React from "react";
import { Box, Typography } from "@material-ui/core";
import Agencies from "../../components/agencies";
import { query } from "../../helpers/useApi";
import styles from "./styles";

const AgenciesPage = () => {
  const classes = styles();
  const { data, isLoading: agenciesLoading } = query({
    key: "agencies",
    path: "data",
    condition: true,
  });
  
  if (agenciesLoading) {
    return (
      <Typography className={classes.title}>Agencies are loading...</Typography>
    );
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>
        Bienvenue dans la liste des agences
      </Typography>
      <Agencies agencies={data} />
    </Box>
  );
};

export default AgenciesPage;
