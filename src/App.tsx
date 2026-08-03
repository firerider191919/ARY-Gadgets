import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";


type Product = {
  id:number;
  name:string;
  price:number;
  category:string;
  image:string;
};


function App(){


const products:Product[]=[

{
id:1,
name:"iPhone 13",
price:299.99,
category:"Phone",
image:"https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=900"
},

{
id:2,
name:"Samsung Galaxy A10",
price:99.99,
category:"Phone",
image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900"
},

{
id:3,
name:"USB-C Fast Charging Cable",
price:8.99,
category:"Accessory",
image:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=900"
},

{
id:4,
name:"La Roche-Posay Cream",
price:16.99,
category:"Beauty",
image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900"
}

];



const [basket,setBasket]=useState<Product[]>([]);

const [openBasket,setOpenBasket]=useState(false);



function addToBasket(product:Product){

setBasket([...basket,product]);

}



function removeItem(index:number){

const copy=[...basket];

copy.splice(index,1);

setBasket(copy);

}



const total=basket.reduce(
(total,item)=>total+item.price,
0
);



return(

<div className="page">


<nav>

<h1>
ARY<span>Hub</span>
</h1>


<div className="links">

<p>Home</p>
<p>Phones</p>
<p>Accessories</p>
<p>Beauty</p>

</div>


<button onClick={()=>setOpenBasket(true)}>

🛒 Basket ({basket.length})

</button>


</nav>





<section className="hero">


<div>

<h2>
Technology.
<br/>
Made Simple.
</h2>


<p>
Quality products at affordable prices.
</p>


<button>
Shop Now
</button>

</div>



</section>





<h2 className="title">
Featured Products
</h2>



<div className="grid">


{products.map(product=>(


<motion.div
className="card"
whileHover={{scale:1.05}}
key={product.id}
>


<img src={product.image}/>


<h3>
{product.name}
</h3>


<p>
{product.category}
</p>


<h2>
£{product.price}
</h2>


<button
onClick={()=>addToBasket(product)}
>

🛒 Add to Basket

</button>


</motion.div>


))}


</div>





{openBasket && (

<div className="modal">


<div className="modal-box">


<h2>
Your Basket
</h2>



{
basket.length===0?

<p>
Your basket is empty
</p>


:

basket.map((item,index)=>(

<div key={index}>

<p>
{item.name}
-
£{item.price}
</p>


<button
onClick={()=>removeItem(index)}
>
Remove
</button>


</div>

))


}



<h2>
Total: £{total.toFixed(2)}
</h2>


<button>

Proceed To Checkout

</button>



<button
onClick={()=>setOpenBasket(false)}
>

Close

</button>


</div>


</div>

)}




<footer>

<h2>
ARYHub
</h2>

<p>
Technology you can trust.
</p>

</footer>


</div>


)

}


export default App;