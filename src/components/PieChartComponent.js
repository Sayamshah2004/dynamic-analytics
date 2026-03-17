import { useEffect } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function PieChartComponent({ products, setProducts }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#ba4388"];

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.products.slice(0, 5).map((item) => ({
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
      <PieChart>
        <Pie
          data={products}
          dataKey="price"
          nameKey="title"
          cx="50%"
          cy="50%"
          outerRadius={100}
        >
          {products.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
