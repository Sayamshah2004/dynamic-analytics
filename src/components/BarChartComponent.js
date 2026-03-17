import { useEffect } from "react";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function BarChartComponent({ products, setProducts }) {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.products.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          rating: item.rating,
        }));
        setProducts(filteredData);
      });
  }, []);

  if (products.length === 0) {
    return <p>Loading Charts...</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={products}>
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="price" fill="#2196f3" />
      </BarChart>
    </ResponsiveContainer>
  );
}
