import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";

class ResultSetTextArea extends Component {
  render() {
	  
	
    let {
      queryScriptDetails,
      onChangeResultSet
    } = this.props;
	
    return (
        
		  <FormControl
            componentClass="textarea"
            value={queryScriptDetails.queryResultSet}
            onChange={onChangeResultSet}
          />
    );
  }
}

export default ResultSetTextArea;
