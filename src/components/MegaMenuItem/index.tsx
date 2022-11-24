import Link from "next/link"
import { Card, Row, Col } from "react-bootstrap"
import { getData } from "../../data"

interface product {
    title:string,
    image:string,
    category:string
    id:number
}

export default function MegaMenuItem ({param}:{param:string}){
    const products = getData(`products/category/${param}`)
    if(products.isLoading) return(<h2>carregando</h2>)
    if(products.isError)return (<h2>deu ruim</h2>)

    console.log(products.data)
    return(
        <Row>
            {products.data.map((item:product,key:number)=>{
                if(key>=3) return;
                return(
                    <Col key={key}>
                        <Link href={`product/${item.category}/${item.id}`}>
                            <Card>
                                <Card.Header>{item.title}</Card.Header>
                                <Card.Img src={item.image}/>
                            </Card>
                        </Link>
                    </Col>
                )
            })}
        </Row>
    );
}