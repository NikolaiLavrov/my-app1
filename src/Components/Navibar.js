import React from 'react';
import { Navbar, Button, Container } from "react-bootstrap";



export default function NaviBar() {

	return (
		<>
			<Navbar variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#home">API Composer</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Button variant="outline-light mr-2">Вход</Button>
						<Button variant="light">Регистрация</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}
