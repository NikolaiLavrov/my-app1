import React from 'react';
import { Navbar, Button, Container } from "react-bootstrap";
import withRouter from "react-router-dom/es/withRouter";



function NaviBar(props) {

	return (
		<>
			<Navbar variant="dark" expand="lg">
				<Container>
					<Navbar.Brand onClick={()=>props.history.push('/')}>API Composer</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Button onClick={()=>props.history.push('/login')} variant="outline-light mr-2">Вход</Button>
						<Button onClick={()=>props.history.push('/signup')} variant="light">Регистрация</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default withRouter(NaviBar)
