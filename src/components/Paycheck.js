import React, { useEffect, useState, useContext,} from 'react';
import GooglePayButton from '@google-pay/button-react'
import { useNavigate } from 'react-router';

export function Paycheck (){
  const [fName,setfname]=useState()
  const [lName,setlname]=useState()
  const [addr,setaddr]=useState()
  const [country,setcoun]=useState()
  const [city,setcity]=useState()
  const [state,setstate]=useState()
  const [code,setcode]=useState()
  const [show,setshow]=useState(true)
  const navigate = useNavigate()
    const submit=()=>{
         if(fName,lName,addr,country,city,state,code!== ""){
              setshow(false)
              console.log(addr)
         }
    }
    const retuned=()=>{setshow(true)}
    return(
        <div className="container-billing">
            
            
             <div className="billing">
                <h3>Billing Details</h3>
                <p>Envato collects and uses personal data in accordance with our Privacy Policy. By creating an account, you agree to our Terms and Conditions.</p>
             </div>
             <div className="line"></div>
             <div>
             {!show ? 
             <div className="billing-details">
             <h3>{`${fName}  ${lName}`}</h3>
                       <div>{addr}.</div>
                       <p>
                    <div>{country}, </div>
                    <div>{state}, </div>
                    <div>{city}, </div>
                    <div>{code}, </div></p>
                    <button class="uk-button uk-button-primary" type="button" onClick={()=>retuned()} >Edit</button>
                      <div className="payment"> 
                          <h2>Payment Method</h2>
                          <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
                      </div>
                    </div>
                    :
                    
             <form class="uk-grid-small" uk-grid>
    <div class="uk-width-1-2@s" id="uk-width-1-4s">
       
        
        <input class="uk-input" type="text" placeholder="FirstName" onChange={e=>setfname(e.target.value)}/>
        
        <input class="uk-input" type="text" placeholder="LastName" onChange={e=>setlname(e.target.value)}/>
        
    </div>
    <div class="uk-width-1-2@s">
        <input class="uk-input" type="text" placeholder="Address" onChange={e=>setaddr(e.target.value)}/>
    </div>
    <div class="uk-width-1-4@s">
        <input class="uk-input" type="text" placeholder="country" onChange={e=>setcoun(e.target.value)}/>
    </div>
    <div class="uk-width-1-4@s">
        <input class="uk-input" type="text" placeholder="city" onChange={e=>setcity(e.target.value)}/>
    </div>
    <div class="uk-width-1-2@s">
        <input class="uk-input" type="text" placeholder="State" onChange={e=>setstate(e.target.value)}/>
    </div>
    <div class="uk-width-1-2@s">
        <input class="uk-input" type="text" placeholder="ZibCode" onChange={e=>setcode(e.target.value)}/>
    </div>
    <button class="uk-button uk-button-primary" type="button" onClick={()=>submit()} >submit</button>
</form>}
             </div> 
        </div>
    )
}
