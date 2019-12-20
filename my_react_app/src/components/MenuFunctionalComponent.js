import React from 'react';

import cake from '../images/cake.jpg';
import pizza from '../images/pizza.jpg';

const menuData = [
    {
        id: 1,
        name: 'Pizza',
        price: 200,
        ratting: 8,
        description: 'Pizza is Awsome',
        imageUrl: pizza
    },
    {
        id: 2,
        price: 100,
        name: 'Cake',
        ratting: 6,
        description: 'Cake is Yummy',
        imageUrl: cake
    }
]

const MenuFunctionalComponent=()=>{
  return (
       <div>
           {true ? "MENU DETAILS" : "hi"}
           {menuData.map(menu => (
               <div class="menu" style={ {border: "1px solid #ccc", marginBottom: "10px", padding: "20px"} } >
                   <img src={menu.imageUrl} alt={`${menu.name}'s image`}
                       style={ {width: "100px"} } />

                   <div class="menu-description">
                       <div class="name-price-ratting">
                           <div>
                               <span class="bold">{menu.name}</span>
                               <div class="bold">
                                   &#x20b9; {menu.price}
                               </div>
                           </div>
                           <div class="star">
                               <span class="fa fa-star checked"></span>
                               <span class="fa fa-star checked"></span>
                               <span class="fa fa-star checked"></span>
                               <span class="fa fa-star"></span>
                               <span class="fa fa-star"></span>

                           </div>
                       </div>

                       <p id="item-dics">{menu.description} </p>
                   </div>
               </div>
           ))}
       </div>
   )
}
export  default MenuFunctionalComponent
