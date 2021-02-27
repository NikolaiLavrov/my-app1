import React from 'react';
import { Container, Row } from "react-bootstrap";
import CardBlock from './Cardblock';

export default function CatalogBlock({ items }) {

	return (
		<>
			<div className="Main">
				<Container>
					<Row className="row-cols-1 row-cols-md-4 g-4">
						{items && items.map((i, index) => <CardBlock item={i} key={index} />)}
					</Row>
				</Container>
			</div>
		</>
	)
}