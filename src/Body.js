import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import QueryEditor from './query-editor/QueryEditor.js';

class Body extends React.Component {
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
