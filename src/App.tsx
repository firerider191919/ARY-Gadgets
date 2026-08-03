import { motion } from "framer-motion";
import "./App.css";

function App() {
  const products = [
    {
      name: "Premium AA Batteries Pack",
      price: "£4.99",
      image:
        "https://images.unsplash.com/photo-1609592806596-b43f4c7c4e1c?w=800",
    },
    {
      name: "Wireless Earbuds",
      price: "£24.99",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800",
    },
    {
      name: "Fast USB-C Charger",
      price: "£14.99",
      image:
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800",
    },
  ];

  const reviews = [
    {
      text: "Fast delivery and excellent quality products. Highly recommended!",
      name: "Sarah M.",
    },
    {
      text: "Great prices and very easy ordering experience.",
      name: "James T.",
    },
    {
      text: "Amazing customer service. Will definitely shop again.",
      name: "Emma R.",
    },
  ];

  return (
    <div className="page">

      <nav>
        <h1>
          ARY<span>Hub</span>
        </h1>

        <div className="links">
          <p>Home</p>
          <p>Shop</p>
          <p>Deals</p>
          <p>Contact</p>
        </div>

        <button>
          🛒 Cart
        </button>
      </nav>


      <section className="hero">

        <motion.div
          initial={{opacity:0,x:-60}}
          animate={{opacity:1,x:0}}
        >

          <h2>
            Smart Technology.
            <br/>
            Simple Shopping.
          </h2>

          <p>
            Quality gadgets and accessories delivered straight to your door.
          </p>

          <button>
            Explore Products
          </button>

        </motion.div>


        <motion.img
          className="heroImg"
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900"
          animate={{y:[0,-15,0]}}
          transition={{
            duration:4,
            repeat:Infinity
          }}
        />

      </section>


      <section className="features">

        <div>
          🚚
          <h3>Fast Delivery</h3>
          <p>Reliable shipping</p>
        </div>

        <div>
          🔒
          <h3>Secure Payments</h3>
          <p>Safe checkout</p>
        </div>

        <div>
          ⭐
          <h3>Trusted Service</h3>
          <p>Happy customers</p>
        </div>

      </section>



      <section>

        <h2 className="title">
          Featured Products
        </h2>


        <div className="grid">

        {products.map((product)=>(

          <motion.div
            className="card"
            whileHover={{
              scale:1.05
            }}
          >

            <img src={product.image}/>

            <h3>
              {product.name}
            </h3>

            <p>
              ⭐⭐⭐⭐⭐
            </p>

            <h2>
              {product.price}
            </h2>

            <button>
              View Product
            </button>


          </motion.div>

        ))}

        </div>

      </section>



      <section>

        <h2 className="title">
          Customer Reviews
        </h2>


        <div className="grid">

        {reviews.map((review)=>(

          <motion.div
            className="review"
            whileHover={{
              y:-10
            }}
          >

            <h2>
              ★★★★★
            </h2>

            <p>
              "{review.text}"
            </p>

            <b>
              {review.name}
            </b>


          </motion.div>

        ))}

        </div>

      </section>



      <footer>

        <h2>
          ARYHub
        </h2>

        <p>
          Technology you can trust.
        </p>

      </footer>


    </div>
  );
}

export default App;