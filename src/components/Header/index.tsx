import Link from "next/link";
import { ReactElement, useState } from "react";
import { Col, Container, Navbar, NavDropdown, Placeholder, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav"
import { getData } from "../../data";
import MegaMenuItem from "../MegaMenuItem";


export default function Header (){
    const categories = getData("products/categories");
    const [cat,setCat] = useState("electronics");
    const changeCat = (item:string)=>{event?.preventDefault(); setCat(item)};

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
            <Nav className="me-auto" variant="tab">
                <Nav.Item>
                    <Nav.Link>teste</Nav.Link>
                </Nav.Item>
                <NavDropdown title="All Products" className="mega-menu">
                    <Container>
                        <Row>
                            <NavDropdown.Header>Products</NavDropdown.Header>
                            <Col md={3}>
                                <Nav variant="pill" className="flex-column" defaultActiveKey="/">
                                    {categories.data.map((item : string,key: number)=>{
                                        return(
                                            <Nav.Item key={key} >
                                                <Nav.Link
                                                    active={cat==item?true:false}
                                                    onClick={()=>changeCat(item)}
                                                    style={{textTransform:"capitalize"}}>
                                                    {item}
                                                </Nav.Link>
                                            </Nav.Item>
                                        )
                                    })}
                                </Nav>
                            </Col>
                            <MegaMenuItem list={categories.data} cat={cat}/>
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