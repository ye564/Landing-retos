import { createContext, useState } from "react";
import Challenge from '../Challenges.json'
export const contextProvider = createContext()

export const Context = ({ children }) => {
    const [retos, setRetos] = useState(Challenge);
    const [searchs, setSearchs] = useState('')


    return (
        <contextProvider.Provider value={
            {
                retos,
                setRetos,
                setSearchs,
                searchs
            }
        }>
            {children}
        </contextProvider.Provider>
    )
}
