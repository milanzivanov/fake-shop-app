import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold tracking-wide py-5 text-gray-900">
        About task
      </h2>
      <ul className="bg-slate-50 p-5 rounded-sm shadow-md text-lg">
        <h3 className="text-2xl font-bold tracking-wide py-2">
          Final task from javascript-react course summer 2024
        </h3>
        <li className="text-balance py-5 border-b">
          Napraviti aplikaciju za online narucivanje garderobe. Aplikacija ce
          imati 5 kljucnih stranica kako bismo omogucili jednostavno I ugodno
          iskustvo korisnicima, te stranice su sledece: Home, Products, Product,
          Cart I Order Summary stranice. U zaglavlju aplikacije treba da budu
          prikazane samo prve 4 (Home, Products, Product, Cart).
        </li>
        <li className="text-balance py-5 border-b">
          Pocinjemo sa Home stranicom, gde smo kreativni u dizajniranju izgleda.
          Na ovoj stranici isticemo dugme Discover our products koje vodi
          korisnike direktno na Products stranicu.
        </li>
        <li className="text-balance py-5 border-b">
          Products stranica prikazuje proizvode dobijene putem odredjenog API-a
          koje mozete naci na kraju zadatka. Svaki proizvod treba da ima
          prikazanu sliku, naslov proizvoda, cenu. Ovi proizvodi predstavljaju
          linkove koji, kada se kliknu, vode korisnike na Product stranicu, gde
          mogu detaljnije pregledati odabrani proizvod. Product stranica pruza
          detaljan pregled odabranog proizvoda, prikazajuci sve relevantne
          informacije I opcije, a to su slika, naziv proizvoda, opis,
          kategorija, cena I dugme Add to Cart koje omogucava korisnicima da ih
          dodaju u korpu.
        </li>
        <li className="text-balance py-5 border-b">
          Na Cart stranici korisnici mogu pregledati proizvode koje su dodali u
          korpu. Klikom na dugme Go to checkout otvara se Order Summary
          stranica.
        </li>
        <li className="text-balance py-5 border-b">
          Order Summary stranica sadrzi formu za popunjavanje adrese za
          dostavu(ime, prezime, adresa, grad I email). Pored toga, pruza pregled
          svih dodatih proizvoda I ukupnu cenu. U okviru forme, postoji dugme
          Checkout koje, kada se klikne, vraca korisnike na Home stranicu.
        </li>
        <li className="py-5 mb-10 text-balance text-indigo-500">
          API:{" "}
          <a
            href="https://fakestoreapi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://fakestoreapi.com
          </a>
          /
        </li>
        <button
          className="text-white bg-indigo-500 rounded-sm px-3 py-2 hover:bg--600"
          onClick={() => navigate("/")}
        >
          Back to home page
        </button>
      </ul>
    </div>
  );
}

export default Product;
