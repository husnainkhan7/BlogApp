import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'


export default function Navbaar({blogList})
{
    useEffect(()=>
    {
        console.log("inside Nav componenet")
      console.log(blogList)
    },[])
    return (<>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Blogs App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Admin</Nav.Link>
              <NavDropdown title="All Blogs" id="basic-nav-dropdown">
                {blogList.map((todo,index) => {
             return( <><NavDropdown.Item value={todo.id}>{todo.title}</NavDropdown.Item></>)
          })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    )
}