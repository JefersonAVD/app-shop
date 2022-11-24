import Link from "next/link"
import { Card, Row, Col, Tab, Button } from "react-bootstrap"
import { getData } from "../../data"

interface product {
    title:string,
    image:string,
    category:string
    id:number
}

interface props {
    list:Array<string>,
    cat:string
}

export default function MegaMenuItem (props:props){
    const products = props.list.map((item:string)=> getData(`products/category/${item}`))
    console.log(products);
    if(products[0].isLoading) return(<Col><h2>carregando</h2></Col>);
    if(products[0].isError) return (<h2>deu ruim</h2>)
    return(
        <Col>
            <Tab.Content>
                {
                    products.map((product:{data:Array<product>},key:number)=>{
                        return(
                            <Tab.Pane 
                                key={key}
                                active={props.list[key] == props.cat?true:false}>
                                <Row>
                                    {product.data?.map((item:product,key:number)=>{
                                        if(key>=3) return;
                                        return(   
                                        <Col key={key} >
                                            <Link href={`product/${item.category}/${item.id}`} className="h-100 d-flex">
                                                <Card>
                                                    <Card.Img height={200} className="p-2 flex-grow-1" variant="top" src={item.image} style={{objectFit:"contain"}}/>
                                                    <Card.Body>
                                                        <Card.Title className="h6">{item.title}</Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        </Col>
                                        )
                                    })}
                                </Row>
                                <Link href={"category/"+props.cat} >
                                    <Button className="mt-3">All Products</Button>
                                </Link>
                            </Tab.Pane>
                        )
                    })
                }
                
            </Tab.Content>
        </Col>
        
    );
}