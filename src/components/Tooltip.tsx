import React, { useState } from "react";

const Tooltip = ({ children, content }: any) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      {showTooltip && (
        <div className="tooltip absolute top-0 left-1/2 -translate-x-1/2 -mt-8">
          <div className="tooltip-content bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md">
            {content}
          </div>
          <div className="tooltip-arrow absolute left-1/2 -translate-x-1/2 bottom-1"></div>
        </div>
      )}
      <button
        type="button"
        className="focus:outline-none"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </button>
    </div>
  );
};

export default Tooltip;
