import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import '../styles/blocks.css'

export default function Cart(){
    const cart = useSelector((state) => state.cart);
    return(
        <div className = 'cart--container'>
            <div className = 'cart--wrapper'>
                <h4 style={{fontSize: '30px', textAlign: 'center', margin:'0', padding:'0', marginTop: '-30px' , marginBottom:'20px'}}> My Cart</h4>

            <div className = 'cart--info'>
               
               
                    <div className = 'cart--product'> 
                {cart.products.map((product) => (
                        <div className = 'cart--ProductDetails'> 
                            <img alt = 'productclicked' className = 'cart--img' src = {product.imageUrl}></img>
                            <div className = 'cart--details'> 
                                    <p className = 'cart--productTitle'>{product.title}</p>
                                    <p className = 'cart--productPrice'> PKR {product.price}</p>

                                    <div className = 'cart--amountContainer'>
                                    <Add />
                                    <p className = 'cart--Productamount'>{product.quantity}</p>
                                    <Remove />
                                    </div>

                                    <img alt = 'delete'  className = 'trash--logo' src = '../images/trash.svg'></img>
                            </div> 
                        </div>
                        
                        ))}
                    </div>
               
                
                    <div className="cart--summary">
                    <h6 style = {{margin: '0', padding: '0'}}>Summary</h6>
                            <div className="summary--item">
                            <p className="summaryItemText">SubTotal</p>
                            <p className="summaryItemPrice"> PKR {cart.total}</p>
                            </div>
                            <div className="summary--item">
                            <div className="summaryItemText">Estimated Shipping</div>
                            <div className="summaryItemPrice">PKR 100</div>
                            </div>
                            <div className="summary--item">
                            <div className="summaryItemText">Estimated Tax</div>
                            <div className="summaryItemPrice">PKR 200</div>
                            </div>
                            <div className="summary--item-total" type="total">
                            <div className="summaryItemText">Total</div>
                            <div className="summaryItemPrice"> PKR {cart.total}</div>
                            </div>
                            <button className="cart--button" >CheckOut</button>
                    </div>
                
                    
                {/* ))} */}
                
           
            </div>

         
            </div>
        </div>
    )
}


// -finalise the design
// -complete the payment part