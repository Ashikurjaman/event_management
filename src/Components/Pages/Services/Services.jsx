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
            <h2>sdsds</h2>
            <div className="grid grid-cols-3 gap-4 ">
            {
                data.map(d =><ServiceCard key={d._id} data={d}></ServiceCard>)
            }
            </div>
            
        </div>
    );
};

export default Services;