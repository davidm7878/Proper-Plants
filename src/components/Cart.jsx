import PLANTS from "../data";

export default function Cart({ cart, AddToCart, RemoveFromCart }) {
  if (!cart || cart.length === 0) {
    return (
      <section className="cart">
        <h2>Cart</h2>
        <p>Cart is empty.</p>
      </section>
    );
  } else {
    return (
      <section className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((plant) => (
            <li className="cartPlant" key={plant.id}>
              <p className="cartImg">
                {plant.image} {plant.name}
              </p>

              <button className="cartButton" onClick={() => AddToCart(plant)}>
                +
              </button>
              <p>{plant.quantity}</p>
              <button
                className="cartButton"
                onClick={() => RemoveFromCart(plant)}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
