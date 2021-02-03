import { Component } from "react";
import "./styles.css";
import { Grid } from "@material-ui/core";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      OutputSentenceValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let InputSentenceSplit = event.target.value.split(" ");
    let OutputSentenceValue = "";
    for (let i = 0; i < InputSentenceSplit.length; i++) {
      if (InputSentenceSplit[i].length < 3)
        return (OutputSentenceValue += InputSentenceSplit[i] + " ");

      let subset = InputSentenceSplit[i].slice(1, -1);
      subset = InputSentenceSplit[i].slice(1, -1).split("");
      subset = Array.from(
        new Set(InputSentenceSplit[i].slice(1, -1).split(""))
      );
      console.log("subset.length)", subset.length);
      console.log("subset", subset);

      OutputSentenceValue +=
        InputSentenceSplit[i].slice(0, 1) +
        subset.length +
        InputSentenceSplit[i].slice(-1) +
        " ";
    }
    // event.target.value.split(" ").forEach((element) => {
    //   if (element.length < 3) return returnValue.concat(element + " ");

    //   let subset = element.slice(1, -1);
    //   subset = element.slice(1, -1).split("");
    //   subset = Array.from(new Set(element.slice(1, -1).split("")));
    //   console.log("subset.length)", subset.length);
    //   console.log("subset", subset);
    //   returnValue.concat(
    //     element.slice(0, 1) + subset.length + element.slice(-1) + " "
    //   );
    // });
    // if (event.target.value.length < 3)
    //   return this.setState({
    //     OutputSentenceValue: event.target.value
    //   });

    // let subset = event.target.value.slice(1, -1);
    // subset = event.target.value.slice(1, -1).split("");
    // subset = Array.from(new Set(event.target.value.slice(1, -1).split("")));
    // console.log("subset.length)", subset.length);
    // // console.log("subset.size()", subset.size());
    // console.log("subset", subset);
    // let OutputSentenceValue =
    //   event.target.value.slice(0, 1) +
    //   subset.length +
    //   event.target.value.slice(-1);
    // this.setState({
    //   OutputSentenceValue: OutputSentenceValue
    // });
    this.setState({ OutputSentenceValue: OutputSentenceValue });
    console.log(this.state);
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
        style={{ padding: 20 }}
      >
        <Grid container justify="center">
          <h1>
            Insight Global Follow-Up: <br />
            VinSolutions Developer II
          </h1>
        </Grid>
        <Grid container justify="center">
          <h2>Solution</h2>
        </Grid>
        <Grid container item xs={6}>
          Input Sentence:
        </Grid>
        <Grid container item xs={6}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.InputSentenceValue}
          />
        </Grid>
        <Grid container item xs={6}>
          Output Sentence:
        </Grid>
        <Grid container item xs={6}>
          <input type="text" value={this.state.OutputSentenceValue} readOnly />
        </Grid>
        <Grid container justify="center">
          <h2>Problem</h2>
        </Grid>
        <Grid container spacing={5} style={{ padding: 20 }}>
          VinSolutions Coding Assessment In the programming language of your
          choice, write a program that parses a sentence and replaces each word
          with the following: first letter, number of distinct characters
          between first and last character, and last letter. For example, Smooth
          would become S3h. Words are separated by spaces or non-alphabetic
          characters and these separators should be maintained in their original
          form and location in the answer. A few of the things we will be
          looking at is accuracy, efficiency, solution completeness. Please
          include this problem description in the comment at the top of your
          solution. The problem is designed to take approximately 1-2 hours and
          will be used as a conversation point in the verbal assessment part of
          the on-site interview. Please complete the coding assessment and have
          your solution uploaded as soon as possible. Please upload your
          solution to Dropbox or similar option (not G-Drive) and send a link to
          download the folder prior to you interview.
        </Grid>
      </Grid>
    );
  }
}
