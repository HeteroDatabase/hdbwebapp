import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import QueryEditor from "./queryEditor";
import { callExecuteScriptAPI } from "../services/queryEditorAPIs";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryScriptDetails: {
        queryScriptText: "",
        dataSourceSelected: "mysql"
      }
    };
  }

  handleTextAreaChange = e => {
    console.log(e.currentTarget);
    let obj = { ...this.state.queryScriptDetails };
    obj.queryScriptText = e.target.value;
    this.setState({ queryScriptDetails: obj });
  };

  handleExecuteScriptAll = async e => {
    e.preventDefault();

    const {
      queryScriptText,
      dataSourceSelected
    } = this.state.queryScriptDetails;

    this.setState({ scriptIsExecuting: true });
    let queryData = {
      script: queryScriptText,
      databaseType: dataSourceSelected
    };
    try {
      const { data } = await callExecuteScriptAPI(queryData);
      console.log("Response: ", data);
      this.setState({
        scriptExecutionComplete: true,
        scriptIsExecuting: false
      });
    } catch (ex) {
      console.log("SOmething rong");
    }
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={7} md={7}>
            <QueryEditor
              queryScriptDetails={this.state.queryScriptDetails}
              onChangeEditorText={this.handleTextAreaChange}
              onExecuteScriptAll={this.handleExecuteScriptAll}
            />
          </Col>
        </Row>
        {this.state.scriptIsExecuting && <h1>Script Is Executing</h1>}

        {this.state.scriptExecutionComplete && (
          <h1>Script Execution Complete</h1>
        )}
      </Grid>
    );
  }
}
export default Body;
