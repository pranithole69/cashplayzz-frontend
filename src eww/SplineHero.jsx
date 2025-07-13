import React from "react";
import "./App.css";

function SplineHero({ onEnter }) {
  return (
    <div className="spline-container">
      <iframe
        src="https://my.spline.design/thresholddarkambientuicopy-AUYLZiTTE3KKpE5EHlkMfh9H/"
        className="spline-iframe"
        title="CashPlayzz 3D"
        allow="autoplay; fullscreen"
      />
      <button className="invisible-enter" onClick={onEnter}></button>
    </div>
  );
}

export default SplineHero;
