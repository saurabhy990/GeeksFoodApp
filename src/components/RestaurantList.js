import React, { useState } from "react";
import { data } from "./Data";

const RestaurantList = () => {
  const [food, setFood] = useState(data);

  function filterData(name) {
    let filterData = data.filter((item) => {
      if (item.name.toLowerCase().includes(name.trim())) {
        return true;
      }
      return false;
    });
    setFood(filterData);
  }

  // this will update the raitng of items
  function updateRating(e) {
    let obj = [...food];

    obj[0].rating = e.target.value;

    setFood(obj);
  }

  // solid principle and clean code

  return (
   <>

    <div style={{display:'flex',padding:"30px",marginTop:'4rem',alingnItems:'center',justifyContent:'space-around',}} >  
        <input style={{padding:'20px',backgroundColor:'whitesmoke',border:"2px solid grey"}}
          type="text"
          name="search"
          placeholder="search food"
          onChange={(e) => {
            filterData(e.target.value);
          }}
        />

      <input style={{padding:'20px',backgroundColor:'whitesmoke',border:"2px solid grey"}}
          type="number"
          name="rating"
          placeholder="Enter Rating"
          onChange={updateRating}
        />
         
      </div>

      <div style={{display:'flex',flexWrap:'wrap',alingnItems:'center',justifyContent:'space-around',padding:"30px",margin:'2rem'}}     >
      {food.map((item) => {
          return (
            <div
              key={item._id.$oid}
              style={{
                border: "1px solid black",
                padding: "0.5rem",
                borderRadius: "1rem",
                height:'150px',
                width:'200px',
                margin: "0.5rem",
                backgroundColor:'greenyellow'
                
                 
                 
              }}
            >
              <h5>{item.name}</h5>
              <p>{item.address}</p>
              <p>Food : {item.type_of_food}</p>
              <p>Rating : {item.rating}</p>
            </div>
          );
        })}
              

      </div>
    
    </>
  );
};

export default RestaurantList;
