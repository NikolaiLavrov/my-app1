

import React from 'react';
import { Container } from 'react-bootstrap';
import { Form, Col, Button, Modal } from "react-bootstrap";
export default function SignUpWindow() {

	return (
		<>
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>Регистрация</Modal.Title>
				</Modal.Header>
				<Container>
					<Form>

						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Почта</Form.Label>
							<Form.Control type="email" placeholder="Введите email" />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Пароль</Form.Label>
							<Form.Control type="password" placeholder="Пароль" />
						</Form.Group>


						<Form.Group as={Col} controlId="formGridAddress1">
							<Form.Label>Адрес</Form.Label>
							<Form.Control placeholder="Проспект мира 14" />
						</Form.Group>


						<Form.Group as={Col} controlId="formGridCity">
							<Form.Label>Город</Form.Label>
							<Form.Control />
						</Form.Group>

						<div className="text-center"><Button variant="dark" type="submit">
							Подтвердить
  					</Button>
						</div>
					</Form>
				</Container>
			</Modal.Dialog>
		</>
	)
}
