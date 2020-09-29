import React, { useState } from "react";

function Todo() {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div class="md:flex mb-6">
      <div class="md:w-2/3">
        <div>
          <label class="inline-flex items-center">
            {checked ? (
              <i class="fas fa-check-circle" onClick={handleCheck}></i>
            ) : (
              <i class="far fa-circle" onClick={handleCheck}></i>
            )}
            <span class="ml-2">Hello World!</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Todo;
