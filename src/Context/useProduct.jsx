import { createContext, useContext, useState } from "react";

const productContext = createContext();

function ProductProvider({children}) {
    const [products, setProducts] = useState(null);
    return (
        <productContext.Provider value = {{products, setProducts}}>{children}</productContext.Provider>
    )

}

function useProducts() {
    const context = useContext(productContext)
    if (context === undefined) {
        throw new Error("Quiz context was used outside of provider ")
       
    }
    return context
    
}
export {ProductProvider, useProducts}