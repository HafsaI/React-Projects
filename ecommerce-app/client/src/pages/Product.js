import { Add, Remove } from "@material-ui/icons";
import Axios from 'axios'
import {  useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux"; //new

export default function Product(){
  const [product, setProduct] = useState({});
  const location = useLocation();
  const dispatch = useDispatch(); //new
  const id = location.pathname.split("/")[2];

  useEffect(() => {
      Axios.get("http://localhost:3001/products/" + id).then((response) => {

      const result = response.data;
      setProduct(result);// catch data sent by server


    });
  }, [id]);



  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
      if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
      } else {
        setQuantity(quantity + 1);
      }
    };


  const addToCart  = () => {
    dispatch(
      addProduct({ ...product, quantity }) //new
    );
  };
return (
    <div className="productpage-container">
      {/* src = '../images/pen_case.jpg' */}
    <div className="wrapper" >
        <div className="productImg-container">
            <img alt='product' src={product.imageUrl}   className="img"/>
        </div>
        <div className="info-container">
            <p className="product--title">{product.title}</p>
            <p className="product--price"> PKR {product.price}</p>
            <div className="productAdd-container">
              <p style={{fontWeight: 'bold' , margin: '5px', fontSize:'18px'}}>Quantity</p>
                <div className="productAmount-container">
                <Remove onClick={() => handleQuantity("dec")} />
                <div className="product--amount">{quantity}</div>
                <Add onClick={() => handleQuantity("inc")} />
                </div>
                <button onClick = {addToCart} className = 'product--button' >Add To Cart</button>

                <p className="product--details">Product Details</p>
                <p >{product.description}</p>
          </div>


        </div>

    </div>
    </div>
);
};


