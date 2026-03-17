import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useEffect } from "react";

export default function LineChartComponent({ products, setProducts }) {
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
        console.log(products);
      });
  }, []);

  if (products.length === 0) {
    return <p>Loading Charts...</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={products}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <XAxis dataKey="title" />
        <YAxis />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#2196f3"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
