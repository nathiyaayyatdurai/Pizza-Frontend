import { useParams,useNavigate } from 'react-router';
import React, { useState}  from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {pizza} from "./Menu"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export function OrderItem() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [quantity,setQuantity]=useState("")
  const navigate = useNavigate()
  const { id } = useParams();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const findd = pizza.find((name) =>{
    
    if(name.id ==id){
    return name
    }
  })
  const curstsize= (id)=>{
      if(document.getElementById(id) ){
      document.getElementById(id).className="curst_color"


  }
  }
  return (
    <div className="orderItem">
      <div className="row">
      <div className="col-lg-6">
        <img src={findd.img}  className="orderImage"></img>
        </div>
      <div className="col-lg-6  orderlist">
        <h3>{findd.name}</h3>
        <h3>$-80.50</h3>
        <h3>{findd.incredients}</h3>
        <h3>{findd.description}</h3>
        <h3>Size of Crust</h3>
         <section className="crust">
                <div id="curst_size" onClick={() => curstsize("curst_size")}>Medium</div>
                <div  id="curst_size" onClick={() => curstsize("curst_size")}>Large</div>
                <div  id="curst_size" onClick={() => curstsize("curst_size")}>Regular</div>
         </section>
         <div className='curst-input'>
            <TextField label="Quantity" color="secondary" focused  onChange={e=>setQuantity(e.target.value)}/>
           
         </div>
         <Button variant="contained" onClick={()=>handleOpen()}>Pay Check </Button>
      </div>
      <div>
       
       <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
         <Box sx={style}>
           <h3 className="orderHeading">{findd.name}</h3>
           <h3>$ : {quantity* 80.50}</h3>
           <Button variant="contained" onClick={()=>navigate("/reservation")}>Pay Check</Button>
           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
           </Typography>
         </Box>
       </Modal>
     </div>
      </div>
    </div>
  );
}
