import React, { CSSProperties } from 'react'

import { Nav, Navbar, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';

import { useState } from 'react'

import { Link } from 'react-router-dom'

// import Autocomplete from 'react-autocomplete';

// import TextField from '@mui/material/TextField';
//href="#action/3.1"  href="#home"
// const MyNavbar = () => {


export default class MyNavbar extends React.Component {

    state = {
        text: null,
        // selectedValue: {},
        selectedOption: null,
        recipes: []
    }

    constructor() {
        super();
        this.testFunc = this.testFunc.bind(this);
    }

    // componentDidMount() {
    //     const recipeUrl = 'http://localhost:4000/search';
    //     const postBody = {
    //         type: "hot",
    //         limit: 10
    //     };
    //     const requestMetadata = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(postBody)
    //     };

    //     fetch(recipeUrl, requestMetadata)
    //         .then(res => res.json())
    //         .then(recipes => {
    //             this.setState({ recipes: recipes });
    //         });
    // }

    // getDataTable = (Table_data) => {
    //     var dps = [];
    //     if (!this.state.loading) {

    //         // console.log(G_data[0][0].title)
    //         for (var i = 0; i < Object.keys(Table_data[0]).length; i++) {
    //             // console.log(Table_data[0][i].title)
    //             dps.push({
    //                 label: i + 1, value: Table_data[0][i].uuid
    //             })
    //         }

    //     }
    //     // dps = [];
    //     return dps;
    // }

    testFunc = async (search) => {
        console.log('test')
        this.setState({ text: search })

        const recipeUrl = 'http://localhost:4000/search';
        const postBody = {
            keyword: search
        };
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        };

        await fetch(recipeUrl, requestMetadata)
            .then(res => res.json())
            .then(recipes => {
                this.setState({ recipes: recipes, errorMessage: null });
                // console.log(recipes)
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            })
            ;


        if (this.state.errorMessage == null &&this.state.recipes != null && (this.state.recipes[0]).length)
            console.log(this.state.recipes[0][0].title)
        else
            console.log('SADdddd')



    }

    // handleChange = selectedOption => {
    //     this.setState({ selectedOption });
    //     console.log(`Option selected:`, selectedOption);
    //   };






    render() {

        const onSend = async (input) => {
            // const recipeUrl = 'http://localhost:4000/search';
            // const postBody = {
            //     keyword: input
            // };
            // const requestMetadata = {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(postBody)
            // };

            // await fetch(recipeUrl, requestMetadata)
            //     .then(res => res.json())
            //     .then(recipes => {
            //         this.setState({ recipes: recipes });
            //         // console.log(recipes)
            //     });
            console.log('YOU CLICK ME')

        }


        // const [text, setText] = useState('')
        const onSubmit = (e) => {
            // console.log("Testtt")
            if (!this.state.text) {
                alert('Please add a text')
                return
            }
            else {
                onSend(this.state.text)
                // console.log(onSend(this.state.text))
                // alert(this.state.recipes)
            }

            // this.setState({text: ''})

            // setText('')
            this.testFunc()
        }
        const { selectedValue = {} } = this.state;

        return (
            <div >
                <Navbar bg="light" expand="lg">
                    <Container>

                        <Navbar.Brand as={Link} to="/">Web-Db</Navbar.Brand>

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

                            {/* <Form className="d-flex" style={{minWidth:'200px'}}>
                                <div >

                                <Select 
                                    value={selectedValue}
                                    options={[{ label: 'Shark', value: 1 },]}//{this.state.recipes}
                                    onChange={this.handleChange}
                                />
                                </div>
                                <Button onClick={onSubmit} variant="outline-secondary">Search</Button>
                            </Form> */}


                            <Form className="d-flex">

                            {/* <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={[{ label: 'The Godfather', id: 1 },]}
                                sx={{ width: 300 }}
                                onChange={(e) => console.log(e.target.value)}
                                renderInput={(params) => <TextField {...params} label="Search" />} */}
{/* /> */}
    
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
    
                                    onChange={(e) => this.testFunc(e.target.value)} //this.setState({text: e.target.value})}
                                   
                                />
                                <Button onClick={onSubmit} variant="outline-secondary">Search</Button>
                            </Form>
    
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


        )

    }

}

// export default MyNavbar
