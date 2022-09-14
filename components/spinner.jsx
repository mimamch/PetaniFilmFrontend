import React from "react";

export default function Spinner() {
  return (
    <div className="spinner-border text-primary m-5" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}