import Link from "next/link";
import { ReactElement, useContext } from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Placeholder, Row } from "react-bootstrap";
import { getData } from "../../data";
import MegaMenuItem from "../MegaMenuItem";

interface process {
    data : object,
    isLoading:boolean,
    isError : boolean,
}

export default function Header (){
    const categories = getData("products/categories");
    console.log(categories.data);

    if(categories.isLoading){
        return(
            <DivNav>
                <Nav className="w-100 gap-3">
                    {Array.from(Array(5).keys()).map((ele,index)=>{
                        return(
                            <Placeholder key={index} as={Nav.Link} className="w-100" ></Placeholder>
                        )
                    })}
                </Nav>
            </DivNav>
        )
    }
    return(
        <DivNav>
            <Nav className="me-auto">
                <NavDropdown title="All Products" className="mega-menu">
                    <Container>
                        <Row>
                            <NavDropdown.Header>Products</NavDropdown.Header>
                            <Col md={3}>
                                {categories.data.map((item : string,key: number)=>{
                                    return(
                                        <NavDropdown.Item key={key} style={{textTransform:"capitalize"}}>
                                            {item}
                                        </NavDropdown.Item>
                                    )
                                })}
                            </Col>
                            <Col>
                                <MegaMenuItem param="men's clothing"/>
                            </Col>
                        </Row>
                    </Container>
                </NavDropdown>
            </Nav>
        </DivNav>
    );
}

const DivNav = ({children}:{ children :ReactElement}) =>{
    return(
        <Navbar bg="light" sticky="top" style={{}}>
        <Container>
            <Link className="navbar-brand" href="/">APP SHOP</Link>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                {children}
            </Navbar.Collapse>
        </Container>
    </Navbar>

    )
}