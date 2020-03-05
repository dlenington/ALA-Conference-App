import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppBar>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={0}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={0}>
          Item Three
        </TabPanel>
      </div>
    );
  }
}

export default Home;
