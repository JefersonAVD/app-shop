import { useRouter } from "next/router"
import { useContext } from "react"
import { Fetch, getData } from "../../../../src/data/index"

interface params{
    id:number
}

export default function Product (){
    const route = useRouter()
    const {id} = route.query;
    const {data, isError,isLoading}=getData(`products/${id}`)
    if(isLoading)return <h1>Carregando</h1>
    console.log(data);
    return(
        <div>
            <img src={data.image} alt="" />
            <div>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                
            </div>
        </div>
    )
}