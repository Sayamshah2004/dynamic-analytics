import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";

export default function Dashboard({ products, setProducts }) {
  fetch("http");
  return (
    <>
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="shadow border p-3 h-100">
            <h4 className="text-center">Line Chart</h4>
            <LineChartComponent products={products} setProducts={setProducts} />
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="shadow border p-3 h-100">
            <h4 className="text-center">Pie Chart</h4>
            <PieChartComponent products={products} setProducts={setProducts} />
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="shadow border p-3 h-100">
            <h4 className="text-center">Bar Chart</h4>
            <BarChartComponent products={products} setProducts={setProducts} />
          </div>
        </div>
      </div>
    </>
  );
}
