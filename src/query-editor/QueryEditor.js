import React from 'react';

import { executeScript } from '../backend-apis/QueryEditorAPIs.js';

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

	executeScriptSuccessHandler(response) {
		console.log("Response: " + response);
		this.setState({scriptExecutedStatus : response});
	}

	executeScript(e) {
		e.preventDefault();
		this.setState({scriptExecutedStatus : false});
		let queryData = {
			script : this.state.queryScriptText,
			databaseType : this.state.dataSourceSelected
		};
		executeScript(queryData,this.executeScriptSuccessHandler);
	}

	render() {
		return (
			<div>
				<textarea name="queryEditorTextarea" onChange={this.handleTextAreaChange}/>
				<button onClick={this.executeScript}>Run</button>
				{
					this.state.scriptExecutedStatus===true &&
					<h1>Script Executed Successfully</h1>
				}
			</div>
		);
	}
}

export default QueryEditor;
