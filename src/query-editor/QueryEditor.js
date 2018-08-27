import React from 'react';
import { Button, FormGroup, FormControl} from 'react-bootstrap';

import { callExecuteScriptAPI } from '../backend-apis/QueryEditorAPIs.js';

class QueryEditor extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			queryScriptText:'',
			dataSourceSelected:'mysql',
			scriptExecutedStatus: false
		};

		//This binds the 'this' reference in executeScript method
		this.executeScript=this.executeScript.bind(this);
		this.handleTextAreaChange=this.handleTextAreaChange.bind(this);
		this.executeScriptSuccessHandler=this.executeScriptSuccessHandler.bind(this);
	}
	
	handleTextAreaChange(e) {
		this.setState({queryScriptText: e.target.value});
	}

	executeScriptSuccessHandler(responseBody) {
		console.log("Response: " + responseBody);
		this.setState({scriptExecutedStatus : responseBody});
	}

	executeScript(e) {
		e.preventDefault();
		this.setState({scriptExecutedStatus : false});
		let queryData = {
			script : this.state.queryScriptText,
			databaseType : this.state.dataSourceSelected
		};
		callExecuteScriptAPI(queryData,this.executeScriptSuccessHandler);
	}

	render() {
		return (
			<form>
				<FormGroup controlId="queryEditorTextArea">
					<FormControl componentClass="textarea" 
						placeholder="Enter the script here..."
						value={this.state.queryScriptText}
						onChange={this.handleTextAreaChange}
					/>
				</FormGroup>

				<br />
					
				<Button bsStyle="danger" onClick={this.executeScript}>Run</Button>
				{
					this.state.scriptExecutedStatus===true &&
					<h1>Script Executed Successfully</h1>
				}
			</form>
		);
	}
}

export default QueryEditor;
