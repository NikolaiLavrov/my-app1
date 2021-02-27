
import React from 'react';
import { Form, Modal, Col, Container } from "react-bootstrap";
export default function SignInWindow() {

	return (
		<>
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>Вход</Modal.Title>
				</Modal.Header>
				<Container>
					<Form>
						<Form.Group as={Col} controlId="formGroupEmail">
							<Form.Label>Почта</Form.Label>
							<Form.Control type="email" placeholder="Введите email" />
						</Form.Group>
						<Form.Group as={Col} controlId="formGroupPassword">
							<Form.Label>Пароль</Form.Label>
							<Form.Control type="password" placeholder="Пароль" />
						</Form.Group>
					</Form>
				</Container>
			</Modal.Dialog>


		</>
	)
}