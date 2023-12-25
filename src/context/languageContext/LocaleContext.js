import { createContext } from "react";

const defaultValue= {
    locale:"az",
    setLocale:()=>{}
}

export default createContext(defaultValue)