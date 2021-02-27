import React from 'react';
import { Form, Container, Col, Row, Button, Nav } from "react-bootstrap";
import PlusButton from './Plus_button';
import PlusButton2 from './Plus_button_2';
import HorizontalLine from './Horizontal_Line';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import SignInWindow from './SignInWindow';
import SignUpWindow from './SignUpWindow';

export default function MainBlock({ endpoints }) {

	return (
		<>

			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/SignUpWindow">Регистрация</Link>
							</li>
							<li>
								<Link to="/SignInWindow">Вход</Link>
							</li>
						</ul>
					</nav>

					<Switch>
						<Route path="/SignInWindow">
							<SignInWindow />
						</Route>
						<Route path="/SignUpWindow">
							<SignUpWindow />
						</Route>
					</Switch>
				</div>
			</Router>
			<div className="Main">
				<Container>
					<Nav className="mb-3" defaultActiveKey="/home">
						<Nav.Item>
							<Nav.Link className="mr-3" href="/home">API</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link-1">Каталог</Nav.Link>
						</Nav.Item>
					</Nav>
					<Row>
						<Col>
							{endpoints && endpoints.map((i, index) => <Form.Control type="search" placeholder={i.placeholder} key={index} />)}
							<div className="text-center btn_plus"><PlusButton /></div>
						</Col>
						<Col md={{ span: 1 }}>{ }</Col>
						<Col>
							<Form.Label>Имя:</Form.Label>
							<Form.Control type="search" placeholder="Endpoint_name_1" />
							<Form.Label>Метод:</Form.Label>
							<Form.Control type="search" placeholder="POST" />
							<Form.Label>Схема запросов:<div className="btn_plus"><PlusButton2 /></div></Form.Label>
							<Row>
								<Col>
									<Form.Control as="select" defaultValue="Выбрать...">
										<option>Выбрать...</option>
										<option>...</option>
									</Form.Control>
								</Col>
								<div className="line_middle"><HorizontalLine /></div>
								<Col>
									<Form.Control as="select" defaultValue="Выбрать...">
										<option>Выбрать...</option>
										<option>...</option>
									</Form.Control>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Control as="select" defaultValue="Выбрать...">
										<option>Выбрать...</option>
										<option>...</option>
									</Form.Control>
								</Col>
								<div className="line_middle"><HorizontalLine /></div>
								<Col>
									<Form.Control as="select" defaultValue="Выбрать...">
										<option>Выбрать...</option>
										<option>...</option>
									</Form.Control>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Control as="select" defaultValue="Выбрать...">
										<option>Выбрать...</option>
										<option>...</option>
									</Form.Control>
								</Col>
								<div className="line_middle"><HorizontalLine /></div>
								<Col>
									<Form.Control as="select" defaultValue="Выбрать...">
										<option>Выбрать...</option>
										<option>...</option>
									</Form.Control>
								</Col>
							</Row>
							<div className="btn_edit"><Button variant="dark">Изменить</Button>{' '}</div>
							<div className="generate_link text-center"><Nav.Link href="#home">http://kolyadiplom.com/IDINBD</Nav.Link></div>

						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}