// components/Spinner.tsx
import React from "react";

const Spinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div
      className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-current border-t-transparent text-brand-brown rounded-full"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Spinner;
