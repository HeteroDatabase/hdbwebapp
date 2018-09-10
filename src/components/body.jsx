import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import QueryEditor from "./queryEditor";
import ResultSetTextArea from "./resultSetTextArea";

import { callExecuteScriptAPI } from "../services/queryEditorAPIs";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryScriptDetails: {
        queryScriptText: "",
        dataSourceSelected: "",
		queryResultSet: ""
      }
    };
  }

  handleTextAreaChange = e => {
    //console.log(e.currentTarget);
    let obj = { ...this.state.queryScriptDetails };
    obj.queryScriptText = e.target.value;
    this.setState({ queryScriptDetails: obj });
  };

  handleSelectChange = e => {
    //console.log(e.currentTarget);
    let obj = { ...this.state.queryScriptDetails };
    obj.dataSourceSelected = e.target.value;
    this.setState({ queryScriptDetails: obj });
  };
  
  handleResultSetChange = e => {
    //console.log(e.currentTarget);
    let obj = { ...this.state.queryScriptDetails };
    obj.queryResultSet = e.target.value;
    this.setState({ queryScriptDetails: obj });
  };
  
  handleExecuteScriptAll = async e => {
    e.preventDefault();

    const {
      queryScriptText,
      dataSourceSelected
    } = this.state.queryScriptDetails;

	let obj = { ...this.state.queryScriptDetails };
	obj.queryResultSet = "script is Executing";
    this.setState({ scriptIsExecuting: true,
		queryScriptDetails: obj
	});
	
	var queryScriptArray = queryScriptText.split(';');
    
	//console.log(queryData);
	for(var i = 0; i < queryScriptArray.length; i++){
		if(queryScriptArray[i]!==""){
			console.log(queryScriptArray[i].trim());
			let queryData = {
				script: queryScriptArray[i].trim(),
				databaseType: dataSourceSelected
			};
			try {
			  const { data } = await callExecuteScriptAPI(queryData);
			  console.log("Response: ", data);
			  let obj = { ...this.state.queryScriptDetails };
			  obj.queryResultSet = data;
			  this.setState({
				scriptExecutionComplete: true,
				scriptIsExecuting: false,
				queryScriptDetails: obj
			  });
			  //console.log(this.state.queryScriptDetails.queryResultSet:data);
			} catch (ex) {
			  console.log("Something wrong");
			}
		}
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
			  onChangeDataSource={this.handleSelectChange}
              onExecuteScriptAll={this.handleExecuteScriptAll}
            />
          </Col>
        </Row>
		
		<Row>&nbsp;</Row>
		<Row>&nbsp;</Row>
		
		<Row>
			<Col xs={7} md={7}>
				<ResultSetTextArea
					queryScriptDetails={this.state.queryScriptDetails}
					onChangeResultSet={this.handleResultSetChange}
				/>
			</Col>
		</Row>

		
		
        {/*{this.state.scriptIsExecuting}*/}

			{/*{this.state.scriptExecutionComplete && (
          <h1>Script Execution Complete</h1>
			)}*/}
      </Grid>
    );
  }
}
export default Body;
