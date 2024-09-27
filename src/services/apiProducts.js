export async function getProducts() {
  const response = await fetch(`https://fakestoreapi.com/products`);
  if (!response.ok) throw Error("Failed getting products");
  const data = await response.json();

  return data;
}
export async function getProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) throw Error(`Couldn't find product #${id}`);

  const data = await response.json();

  return data;
}
