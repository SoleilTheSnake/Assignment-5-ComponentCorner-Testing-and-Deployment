import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from "../../components/ProductCard.jsx";

// Creating a test to make sure the product details show up.
// I had to use AI to help me with this because of how I coded my products.
const product = {
  title: "Test Product",
  description: "A test product",
  img: "test.jpg",
  price: "$19.99",
};

test("renders product details", () => {
  render(
    <BrowserRouter>
      <ProductCard {...product} onAddToCart={() => {}} />
    </BrowserRouter>
  );

  expect(screen.getByText("Test Product")).toBeInTheDocument();
  expect(screen.getByText("A test product")).toBeInTheDocument();
  expect(screen.getByText("$19.99")).toBeInTheDocument();
  expect(screen.getByAltText("Test Product")).toHaveAttribute("src", "test.jpg");
  expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
});