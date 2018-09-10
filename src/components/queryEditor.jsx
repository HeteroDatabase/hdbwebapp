import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";

class QueryEditor extends Component {
  render() {
	  var style = {
		
		fontFamily: 'Arial',
		position: 'absolute',
		backgroundColor: 'DodgerBlue',
		top: '100%',
		left: '0',
		right: '0',
		zIndex: '99',
		width: '200px'
    };

	
    let {
      queryScriptDetails,
      onChangeEditorText,
	  onChangeDataSource,
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
		
		<Grid>
			<Row>
				<Col xs={6} md={6}>
				
					<select  value={queryScriptDetails.dataSourceSelected} onChange={onChangeDataSource}>
						<option value=" ">Select</option>
						<option value="mysql">MySql</option>
						<option value="oracle">Oracle</option>
					</select>
				</Col>
				
				<Col align='right' xs={6} md={6}>
					<Button bsStyle="success" onClick={onExecuteScriptAll}>
					  Run
					</Button>
				</Col>
			</Row>
		</Grid>
      </form>
    );
  }
}

export default QueryEditor;
