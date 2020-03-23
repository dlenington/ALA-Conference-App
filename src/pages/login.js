import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";
import { Link } from "react-router-dom";

//MUI stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  ...theme.spreadThis,
  form: {
    textAlign: "center"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: 20,
    position: "relative"
  }
});

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  loginUser = userData => {
    axios
      .post("/login", userData)
      .then(res => {
        const FBIdToken = `Bearer ${res.data.token}`;
        localStorage.setItem("FBIdToken", FBIdToken);
        axios.defaults.headers.common["Authorization"] = FBIdToken;
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          errors: err.response.data
        });
      });
  };
  handleSubmit = event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.loginUser(userData);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant="h2">Login</Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Login
            </Button>
            <br />
            <small>
              No account? Sign up <Link to="/signup">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

export default withStyles(styles)(Login);
