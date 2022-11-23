import Link from "next/link";
import { useContext } from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Placeholder, Row } from "react-bootstrap";
import { Data } from "../Layout";

interface process {
    data : object,
    isLoading:boolean,
    isError : boolean,
}

export default function Header ({process}:{process:process}){
    const {data, isLoading, isError} = process;

    if(!!data){
        return(
            <Navbar bg="light" sticky="top">
                <Container>
                    <Link className="navbar-brand" href="/">APP SHOP</Link>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Nav className="w-100 gap-3">
                            {Array.from(Array(5).keys()).map((ele,index)=>{
                                return(
                                    <Placeholder key={index} as={Nav.Link} className="w-100" ></Placeholder>
                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
    return(
        <div>
            <Navbar bg="light" sticky="top" style={{}}>
                <Container>
                    <Link className="navbar-brand" href="/">APP SHOP</Link>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Nav className="me-auto">
                            <NavDropdown title="All Products" className="mega-menu">
                                <Row>
                                    <Col>
                                        <h1>1</h1>
                                    </Col>
                                    <Col>
                                        <h1>2</h1>
                                    </Col>
                                    <Col>
                                        <h1>3</h1>
                                    </Col>
                                </Row>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}