import React, { useState,useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pizza1 from "../images/pizza1.jpg"
import pizza2 from "../images/pizza2.jpg"
import pizza3 from "../images/pizza3.jpg"
import { MyContext } from "../common";
import { useNavigate } from 'react-router';

 export let pizza = [{
  id:"1",
  img:pizza1 ,
  name: "BARBECUE PIZZA",
  incredients: "Chicken / Olive Oil /Salt",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or"
}, 
{
  id:"2",
  img: pizza2,
  name: "BARBECUE PIZZA",
  incredients: "Chicken / Olive Oil /Salt",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or"
},
{ id:"3",
  img: pizza1,
  name: "BARBECUE DRINKS",
  incredients: "Chicken / Olive Oil /Salt",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or"
},
{ id:"4",
  img: pizza2,
  name: "BARBECUE SALAD",
  incredients: "Chicken / Olive Oil /Salt",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or"
},
{ id:"5",
  img: pizza1,
  name: "BARBECUE SALAD",
  incredients: "Chicken / Olive Oil /Salt",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or"
},
{ id:"6",
  img:pizza3,
  name: "BARBECUE PASATHA",
  incredients: "Chicken / Olive Oil /Salt",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or"
},
{ id:"7",
  img: pizza1,
  name: "BARBECUE BURGER",
  incredients: "Chicken / Olive Oil /Salt",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or"
},
{ id:"8",
  img: pizza2,
  name: "BARBECUE BURGER",
  incredients: "Chicken / Olive Oil /Salt",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or"
},
{ 
  id:"9",
  img: pizza3,
  name: "BARBECUE DRINKS",
  incredients: "Chicken / Olive Oil /Salt",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or"
},


];
export function Menu() {


  const [pizarray, setpizarr] = useState(pizza);
  const [sorted, setsorted] = useState(pizza);
  const { order,setorder} = useContext(MyContext)
  const navigate = useNavigate()
  const sorting = (drinks) => {
    if (drinks == "") {
      setsorted(pizza);
    } else {
      var pizz = pizza.filter(data => data.name.includes(drinks));
      setsorted(pizz);
    }
  };

  return (
    <>
      <div className="menu_nav">
        <nav className="uk-navbar-container" uk-navbar>
          <div class="uk-navbar-center">
            <ul class="uk-navbar-nav">
              <li class="uk-active" onClick={() => sorting("")}><a>All</a></li>
              <li class="uk-parent" onClick={() => sorting("DRINKS")}><a>Drinks</a></li>
              <li class="uk-parent" onClick={() => sorting("SALAD")}><a>Salad</a></li>
              <li class="uk-parent" onClick={() => sorting("BURGER")}><a>Burger</a></li>

            </ul>
          </div>
        </nav>
      </div>
      <div className="pizza_list row">
        {sorted.map(data => <Card sx={{ maxWidth: 345 }} className="col-lg-4">
          <CardMedia
            component="img"
            height="140"
            image= {data.img}
            alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {data.incredients}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" onClick={()=>setorder([...order,data])}>Add to card</Button>
            <Button size="small"  onClick={()=>navigate("/OrderItem/"+data.id)} >Order Now</Button>
          </CardActions>
        </Card>
        )}
      </div>
    </>
  );
}
