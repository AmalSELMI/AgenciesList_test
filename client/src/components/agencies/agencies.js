import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";
import styles from "./styles";

const Agencies = ({ agencies }) => {
  const classes = styles();

  const [agencyState, setAgencyState] = useState(
    JSON.parse(localStorage.getItem("selectedAgency")) || {
      id: "",
      name: "",
      manager: "",
      activity: "",
    }
  );

  const handleChange = (event) => {
    const selectedAgency = agencies.filter(
      (agency) => agency.id === event.target.value
    )[0];
    setAgencyState(selectedAgency);
    localStorage.setItem("selectedAgency", JSON.stringify(selectedAgency));
  };

  return (
    <Box className={classes.root} display="flex" flexDirection="column">
      <FormControl className={classes.input}>
        <InputLabel htmlFor="agency">Agency</InputLabel>
        <Select
          native
          value={agencyState.id}
          onChange={handleChange}
          inputProps={{
            id: "agency",
          }}
        >
          <option aria-label="None" value="" />
          {agencies.map((agency) => (
            <option key={agency.id} value={agency.id}>
              {agency.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <Box display="flex" flexDirection="row">
        {agencyState.manager && (
          <Box className={classes.boxClass}>
            <Typography align="center">
              Manager: {agencyState.manager}
            </Typography>
          </Box>
        )}
        {agencyState.activity && (
          <Box className={classes.boxClass}>
            <Typography align="center">
              Activité: {agencyState.activity}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Agencies;
