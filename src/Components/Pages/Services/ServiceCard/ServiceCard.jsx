import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({data}) => {
  let loadData = [data];
   const lo=loadData.slice(0,5)
  console.log(lo);
  
    useEffect(() => {
        AOS.init();
      }, [])
    const {_id,title,image_url} = data;
  return (
    <>
      

    <div className="grid-cols-3 " >
        <div className="card w-96 h-96  bg-base-100 shadow-xl " data-aos="flip-left">
      <figure className="p-2">
        <img
        
        className="w-72"
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>{title.length < 100 ? title.slice(0,99)
        :
        `${title.slice(0,100)}  ...`
    
    }</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ServiceCard;
