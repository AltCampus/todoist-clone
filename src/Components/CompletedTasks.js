import React, { useState } from "react";

function Filters() {
  return (
    <div className="md:w-2/3">
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <i className="fas fa-check-circle" />
          <span className="ml-2 line-through">Task #1</span>
        </label>
      </div>
    </div>
  );
}
export default Filters;
