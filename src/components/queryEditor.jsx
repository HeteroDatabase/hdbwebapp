import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

import { callExecuteScriptAPI } from "../services/queryEditorAPIs";

class QueryEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryScriptText: "",
      dataSourceSelected: "mysql",
      scriptExecutedStatus: false
    };
  }

  handleTextAreaChange = e => {
    this.setState({ queryScriptText: e.currentTarget.value });
  };

  executeScript = async e => {
    e.preventDefault();

    const { queryScriptText, dataSourceSelected } = this.state;

    this.setState({ scriptExecutedStatus: false });
    let queryData = {
      script: queryScriptText,
      databaseType: dataSourceSelected
    };
    const { data } = await callExecuteScriptAPI(queryData);

    console.log("Response: ", data);
    this.setState({ scriptExecutedStatus: data });
  };

  render() {
    return (
      <form>
        <FormGroup controlId="queryEditorTextArea">
          <FormControl
            componentClass="textarea"
            placeholder="Enter the script here..."
            value={this.state.queryScriptText}
            onChange={this.handleTextAreaChange}
          />
        </FormGroup>

        <br />

        <Button bsStyle="success" onClick={this.executeScript}>
          Run
        </Button>
        {this.state.scriptExecutedStatus && (
          <h1>Script Executed Successfully</h1>
        )}
      </form>
    );
  }
}

export default QueryEditor;
