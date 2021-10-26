import React from 'react'

import { Nav, Navbar, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';

import { useState } from 'react'

import { Link } from 'react-router-dom'

//href="#action/3.1"  href="#home"
const MyNavbar = () => {

    const [text, setText] = useState('')
    const onSubmit = (e) => {
        console.log("Testtt")
        if (!text) {
            alert('Please add a task')
            return
          }
          else{
            alert(text)
          }
        
        setText('')
    }

    return (
        <div >
            <Navbar bg="light" expand="lg">
                <Container>

                    <Navbar.Brand  as={Link} to="/">Web-Db</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link as={Link} to="/">Home</Nav.Link>

                            <Nav.Link as={Link} to="/Graphs">Graphs</Nav.Link>

                            <Nav.Link as={Link} to="/Table">Table</Nav.Link>

                            <NavDropdown title="Country" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/Country-US">US</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Country-US">Another action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Country-US">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/Unit">Test Unit</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"

                                onChange={(e) => setText(e.target.value)}
                               
                            />
                            <Button onClick={onSubmit} variant="outline-secondary">Search</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    )
}

export default MyNavbar
