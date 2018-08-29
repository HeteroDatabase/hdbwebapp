import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

class QueryEditor extends Component {
  render() {
    let {
      queryScriptDetails,
      onChangeEditorText,
      onExecuteScriptAll
    } = this.props;
    return (
      <form>
        <FormGroup controlId="queryEditorTextArea">
          <FormControl
            componentClass="textarea"
            placeholder="Enter the script here..."
            value={queryScriptDetails.queryScriptText}
            onChange={onChangeEditorText}
          />
        </FormGroup>

        <br />

        <Button bsStyle="success" onClick={onExecuteScriptAll}>
          Run
        </Button>
      </form>
    );
  }
}

export default QueryEditor;
