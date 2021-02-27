import React from 'react';
import { Card, Col } from "react-bootstrap";

export default function CardBlock({item}) {

	return (
		<>
			<Col>
				<Card className="mb-3">
					<Card.Img variant="top" src="/bg_catalog.jpg" />
					<Card.Body>
						<Card.Title>{item.title}</Card.Title>
						<Card.Text>
							{item.description}
    				</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</>
	)
}
