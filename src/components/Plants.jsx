export default function Plants({ plants, AddToCart }) {
  return (
    <section className="plantSection">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <li className="plant" key={plant.id}>
            <p className="plantImg">{plant.image}</p>
            <h3>{plant.name}</h3>
            <button className="addToCart" onClick={() => AddToCart(plant)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
