import React, { useEffect, useState, useContext,} from 'react';
import ControlledCarousel from './coursel.js'
import pizza1 from "../images/pizza1.jpg"
import pizza2 from "../images/pizza2.jpg"
import pizza3 from "../images/pizza3.jpg"

export function Home (){
    const arr =[{
        font:"fa fa-cutlery fa-3x",
        heading :"ORDER YOUR FOOD",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-"

    },
    {
        font:"fa fa-truck fa-3x",
        heading :"DELIVERY OR PICK UP",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-"

    },
    {
        font:"fa fa-puzzle-piece fa-3x",
        heading :"DELICIOUS RECEIPE",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-"

    }
]
    return(
      <>
        <ControlledCarousel/>
        <div className="transport" >
    {arr.map((trans)=>
               
                <section className="accod" uk-scrollspy="cls:uk-animation-fade delay: 500" uk-scrollspy-class="uk-animation-slide-bottom">
                <i class={trans.font} aria-hidden="true"></i>
                <h3>{trans.heading}</h3>
                <p>{trans.description}</p>
                </section>
)}
        </div>
        <div className="speciality_header" >
              <h4 >Fresh From Pizzon</h4>
              <h2>OUR SPECIALITY</h2>
            <section className="speciality">
                <div><img className="special_case" src={pizza3}/></div>
                <div> <img className="special_case" src={pizza2}/></div>
                <div><img className="special_case" src={pizza1}/></div>
            </section>

        </div>
      </>
    )
  }
  