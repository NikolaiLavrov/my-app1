import React from 'react';
import withRouter from "react-router-dom/es/withRouter";
import Container from "react-bootstrap/Container";
import './CustomNavBar.css'

export const CustomNavBar = withRouter((props) => {
    const { pathname } = props.location;

    return (
        <Container style={{marginTop: 24}}>
            <div style={{display: 'flex', flexDirection: 'row', width: 120, justifyContent: 'space-between'}}>
                <div onClick={()=>props.history.push('/api')} className={`default ${pathname === '/api'?'active':''}`}>API</div>
                <div onClick={()=>props.history.push('/catalog')} className={`default ${pathname === '/catalog'?'active':''}`}>Каталог</div>
            </div>
        </Container>
    )
})