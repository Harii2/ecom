import axios from "axios";

export async function productsData() {
    try{
        const products = await axios.get(
            "https://fakestoreapiserver.reactbd.com/products"
        );
        return products
    }
    catch(e){
        console.log(e)
        return [];
    }
    
}