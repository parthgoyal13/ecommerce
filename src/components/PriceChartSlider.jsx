import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceChartSlider = ({ data, min, max, range, onChange }) => {
  const marks = {
    [min]: `${min} INR`,
    [max]: `${max} INR`,
  };

  return (
    <div>
      <h6>Price</h6>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data}>
          <XAxis dataKey="range" hide />
          <Tooltip />
          <Bar dataKey="count" fill="#a2d2ff" />
        </BarChart>
      </ResponsiveContainer>

      <div className="my-3 px-2">
        <Slider
          range
          min={min}
          max={max}
          value={range}
          onChange={onChange}
          marks={marks}
          step={100}
          railStyle={{ backgroundColor: "#ccc" }}
          trackStyle={[{ backgroundColor: "#007bff" }]}
          handleStyle={[{ borderColor: "#007bff" }, { borderColor: "#007bff" }]}
        />
      </div>

      <div className="d-flex justify-content-between px-2">
        <span>{range[0]} INR</span>
        <span>{range[1]} INR</span>
      </div>
    </div>
  );
};

export default PriceChartSlider;
