import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard/ServiceCard";
import { useEffect, useState } from "react";


const Services = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(da=>setData(da))
    },[])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center pb-12 pt-8 ">Services</h2>
            <div className="grid md:grid-cols-3 gap-4 sm:justify-items-center ">
            {
                data.slice(0,6).map(d =><ServiceCard key={d._id} data={d}></ServiceCard>)
            }
            </div>
            
        </div>
    );
};

export default Services;