import { Component } from "react";
import "./styles.css";
import { Grid } from "@material-ui/core";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Grid item xs={6}>
          Input Sentence:
        </Grid>
        <Grid item xs={6}>
          <input
            type="textarea"
            name="textValue"
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          Output Sentence:
        </Grid>
        <Grid item xs={6}>
          <input
            type="textarea"
            name="textValue"
            onChange={this.handleChange}
          />
        </Grid>
      </Grid>
    );
  }
}
