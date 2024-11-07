import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { Helmet } from "react-helmet-async";

const GadgetCards = () => {
    const data = useLoaderData();
    const {category} = useParams();
    const [gadgets, setGadgets] = useState([]);

    useEffect(()=> {
        if(category){
            const filteredByCategory = [...data].filter(gadget => gadget.category === category)
            setGadgets(filteredByCategory)
        }
        else{
            setGadgets(data)
        }
    }, [category, data])


    return (
      
       <>
       <Helmet>
       <title>{category ? `${category} | Gadget Heaven` : "Gadgets | Gadget Heaven"}</title>
       </Helmet>
       
       <div className="grid grid-cols-3 gap-6 mb-[48px]">
        {
            gadgets.map(gadget => <Card key={gadget.id} gadget={gadget}></Card>)
        }
       </div>
       
       </>
    );
};

export default GadgetCards;