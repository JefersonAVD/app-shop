import useSWR from "swr";
import axios from "axios";

const Axios = axios.create({baseURL:'https://fakestoreapi.com/'})

const Fetch = (url : string) => Axios.get(url).then(resp =>resp.data);

export function getData(url : string){
    const {data, error} = useSWR( url, Fetch );

    return{
        data:data,
        isLoading: !data && !error,
        isError: error
    };
}