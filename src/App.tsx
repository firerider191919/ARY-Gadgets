import { motion } from 'framer-motion';
import './App.css';

function App() {
  const products = [
    {
      name: 'Duracell Simply AA Batteries',
      price: '£4.99',
      image: 'https://m.media-amazon.com/images/I/71O4jS5qQ2L._AC_SL1500_.jpg',
    },
    {
      name: 'Amazon Kindle',
      price: '£99.99',
      image: 'https://m.media-amazon.com/images/I/61Iz2yy2CKL._SL1000_.jpg',
    },
  ];

  const reviews = [
    {
      text: 'Ordered batteries for my camera and they arrived quickly. Great value and quality.',
      name: 'Sarah M.',
    },
    {
      text: 'Bought a Kindle as a gift. Easy ordering and the product was perfect.',
      name: 'James T.',
    },
    {
      text: 'Amazing prices and great customer service. Will definitely order again.',
      name: 'Emma R.',
    },
  ];

  return (
    <div className="page">
      <nav>
        <h1>
          ARY <span>Gadgets</span>
        </h1>

        <div className="links">
          <p>Home</p>
          <p>Products</p>
          <p>Deals</p>
          <p>Contact</p>
        </div>

        <button>Cart 🛒</button>
      </nav>

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2>
            Technology that
            <br />
            fits your lifestyle.
          </h2>

          <p>Premium electronics and accessories at affordable prices.</p>

          <button>Shop Now</button>
        </motion.div>

        <motion.img
          className="heroImg"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=700"
        />
      </section>

      <section>
        <h2 className="title">Featured Products</h2>

        <div className="grid">
          {products.map((product) => (
            <motion.div whileHover={{ scale: 1.05 }} className="card">
              <img src={product.image} />

              <h3>{product.name}</h3>

              <p>★★★★★</p>

              <h2>{product.price}</h2>

              <button>View Product</button>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="title">Customer Reviews</h2>

        <div className="grid">
          {reviews.map((review) => (
            <motion.div whileHover={{ y: -10 }} className="review">
              <h2>★★★★★</h2>

              <p>"{review.text}"</p>

              <b>{review.name}</b>
            </motion.div>
          ))}
        </div>
      </section>

      <footer>
        <h2>ARY Gadgets</h2>
        <p>Modern technology. Reliable products.</p>
      </footer>
    </div>
  );
}

export default App;
