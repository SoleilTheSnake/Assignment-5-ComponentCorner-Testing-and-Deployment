import React from 'react';
import ProductCard from '../components/ProductCard';
const products = [
  {
    title: "Waterfall Glitter Tumbler",
    description: "This official UNDERTALE tumbler was designed by Nina Matsumoto to commemorate the game's 11th anniversary.It's a double-walled, 16 oz translucent plastic tumbler.",
    price: 32,
    img: "https://tinyurl.com/yd9fxkej",
  },
  {
    title: "Waterfall Shower Curtain",
    description: "(The sound of rushing water fills you with determination.)This official UNDERTALE shower curtain was designed by Nina Matsumoto to commemorate the game's 11th anniversary.It's 72 inches square (1.83 m) and made from polyester with a fluorine-free waterproof coating.",
    price: 24,
    img: "https://tinyurl.com/3kxs6efc",
  },
  {
    title: "Napstablook Bath Mat",
    description: "The fresh scent of ectoplasm permeates the vicinity.This official UNDERTALE bath mat was designed by Audrey Waner to celebrate the game's 11th anniversary. It's 18 inches wide by 32 inches tall, with a nonslip canvas backing.",
    price: 29,
    img: "https://tinyurl.com/nu8re9xx",
  },
  {
    title: "Space Junk Floating Pen",
    description: "The faint odor of ectoplasm permeates the vicinity. This official UNDERTALE pen was designed by Fangamer Japan's Ikuno Ohashi and produced in Denmark by none other than the inventors of the floating action pen, Eskesen. Ohto 705NP refill cartridges work with this pen, once trimmed to fit. Other refill cartridges with similar properties should also work. To refill, pull the pen straight apart from the center seam, grasping both ends and using steady force.",
    price: 12,
    img: "https://tinyurl.com/ycyw6jw3"
  },
  {
    title: "Sans Hoodie",
    description: "Along the way, some fuzzy folk decided they liked the cold and set up camp in Snowdin. This official UNDERTALE hoodie is a fully custom design—everything from the cord pulls to the fabric liner was made especially for it. The body of the jacket is 100% cotton, and the interior of the hood is sherpa fleece. The things you can do with a college education!",
    price: 74,
    img: "https://tinyurl.com/rc2s95by"
  },
{
    title: "Megalovania Jacket",
    description: "This official UNDERTALE sukajan-style jacket was designed by Nina Matsumoto to commemorate the game's 10th anniversary. It's a 100% polyester satin jacket.",
    price: 99,
    img: "https://tinyurl.com/spnxuuee"
},
{
  title: "ICE-E And Friends Silicone Ice Mold",
  description: "Hey Kid'S! Can you help me freeze this water? This official UNDERTALE flat silicone ice tray lets you create ice that resembles Ice-E as well as some friends. The tray is 7 inches long, 5 inches wide, and 2 inches deep. It was designed by Jorge M. Velez.",
price: 15,
img: "https://tinyurl.com/5feftf9e"
},
{
  title:"UNDERTALE Vinyl Record Coaster Set",
  description: "If you've been using your full-size UNDERTALE LPs as coasters all this time, we're excited to announce a better way. This official UNDERTALE coaster set was designed by Chihiro Sakaida for Fangamer Japan, based on original art from the UNDERTALE Vinyl Box Set designed by ADE. It consists of five 3.9-inch polystyrene coasters wrapped up in miniature sleeves and packed in a miniature paper slipcase.",
  price: 32,
  img: "https://tinyurl.com/2amn4kf4"
},
{
  title: "Toriel Slippers",
  description: "These official UNDERTALE slippers were designed by Laura Verdin. They're available in three sizes; consult the size guide to see which one will fit you best. They're made from an embroidered fleece upper with a fleece lining and a sole made from microfiber and foam. ",
  price: 32,
  img: "https://tinyurl.com/5camdbpb"
}
];
function ProductsPage({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          price={`$${product.price}`}
          img={product.img}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}

export default ProductsPage;