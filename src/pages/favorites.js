import React, { Component } from "react";
import { Chart } from "react-google-charts";

//Redux stuff
import { connect } from "react-redux";

//MUI Stuff
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

class Favorites extends Component {
  render() {
    // const { events } = this.props.data;
    // let eventsMarkup = events.map((event) => (
    //   <Event key={event.eventId} event={event} />
    // ));
    return (
      <Grid container spacing={2}>
        <Grid item sm={12} xs={12}>
          {/* {eventsMarkup} */}
          <div width="auto">
            <Card>
              <CardContent>
                <Typography variant="h5">Student/Parent Survey</Typography>
                <Chart
                  width={"500px"}
                  height={"300px"}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Year", "Sales", "Expenses", "Profit"],
                    ["2014", 1000, 400, 200],
                    ["2015", 1170, 460, 250],
                    ["2016", 660, 1120, 300],
                    ["2017", 1030, 540, 350],
                  ]}
                  options={{
                    // Material design options
                    chart: {
                      title: "Company Performance",
                      subtitle: "Sales, Expenses, and Profit: 2014-2017",
                    },
                  }}
                  // For tests
                  rootProps={{ "data-testid": "2" }}
                />
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    );
  }
}

// const mapStateToProps = (state) => ({
//   user: state.user,
//   data: state.data,
// });

export default Favorites;
