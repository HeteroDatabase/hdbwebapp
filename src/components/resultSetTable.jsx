import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";

import ReactTable from "react-table";
import "react-table/react-table.css";

class ResultSetTable extends Component {
	
  render() {
	  
	
    let {
      queryScriptDetails
    } = this.props;

	
  
  {/*const columns = this.getColumns();*/}
	
	
    return (

		
		<ReactTable
          data={queryScriptDetails.queryResultSet}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
		
		  
    );
  }
}

export default ResultSetTable;
