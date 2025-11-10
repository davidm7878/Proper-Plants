import { useState } from "react";
import PLANTS from "./data";
import Plants from "./components/Plants";
import Cart from "./components/Cart";
// import AddToCart from "./components/AddToCart";

export default function App() {
  const [plants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  function AddToCart(plant) {
    //   check if plant exists. if plant doesnt exist, then add plant to list. if plant exists, add 1 to quantity.
    const itemExists = cart.find((item) => item.id === plant.id);

    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }

  function RemoveFromCart(plant) {
    setCart((empty) =>
      empty
        .map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <Plants plants={plants} AddToCart={AddToCart} />

        <Cart
          cart={cart}
          AddToCart={AddToCart}
          RemoveFromCart={RemoveFromCart}
        />
      </main>
    </>
  );
}
