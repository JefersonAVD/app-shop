import { getData } from "../../../src/data"

interface params{
    id:number
}

export default function Product ({params}:{params:params}){
    return<h1>{params.id}</h1>
}