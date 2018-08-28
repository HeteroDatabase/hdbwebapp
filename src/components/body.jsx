import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import QueryEditor from "./queryEditor";

class Body extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={7} md={7}>
            <QueryEditor />
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Body;
