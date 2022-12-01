import { createContext, ReactElement } from "react";
import { getData } from "../../data";
import Header from "../Header";

export const Data = createContext({});

export default function Layout({children}:{children:ReactElement}){
    const {data, isLoading, isError} = getData("products");

    return(
        <Data.Provider value={{data,isLoading,isError}}>
            <Header/>
            <main>
                {children}
            </main>
        </Data.Provider>
    )
}
  