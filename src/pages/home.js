import React, { Component } from "react";
import PropTypes from "prop-types";

import Day from "../components/day";

//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Wed" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Th" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Fr" href="/spam" {...a11yProps(2)} />
          <LinkTab label="Sat" href="/spam" {...a11yProps(3)} />
          <LinkTab label="Sun" href="/spam" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Day day={"wed"} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Day day={"th"} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Day day={"fr"} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Day day={"sat"} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Day day={"sun"} />
      </TabPanel>
    </div>
  );
}
