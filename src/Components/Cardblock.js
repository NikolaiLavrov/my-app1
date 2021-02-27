import React from 'react';
import { Card, Col } from "react-bootstrap";

export default function CardBlock() {

	return (
		<>
			<Col>
				<Card className="mb-3">
					<Card.Img variant="top" src="/bg_catalog.jpg" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
    				</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</>
	)
}
