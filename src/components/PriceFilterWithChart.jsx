import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceFilterWithChart = ({ data, range, onChange }) => {
  // Convert raw data into histogram bins (optional simplification)
  const formattedData = [
    { price: "0", count: 2 },
    { price: "5k", count: 4 },
    { price: "10k", count: 7 },
    { price: "15k", count: 10 },
    { price: "20k", count: 6 },
    { price: "25k", count: 5 },
    { price: "30k", count: 3 },
  ];

  return (
    <div className="p-3">
      <h5 className="mb-1">Price</h5>

      <div style={{ height: 150 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={formattedData}>
            <XAxis dataKey="price" hide />
            <Tooltip />
            <Bar dataKey="count" fill="#a5d8ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="">
        <Slider
          range
          min={0}
          max={1000}
          step={10}
          value={range}
          onChange={onChange}
          trackStyle={[{ backgroundColor: "#007bff" }]}
          handleStyle={[{ borderColor: "#007bff" }, { borderColor: "#007bff" }]}
        />
        <div className="d-flex justify-content-between mt-2">
          <input
            type="text"
            className="form-control w-45 mx-2 "
            value={range[0].toLocaleString("en-IN") + " INR"}
            readOnly
          />
          <input
            type="text"
            className="form-control w-45"
            value={range[1].toLocaleString("en-IN") + " INR"}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilterWithChart;
