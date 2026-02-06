"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="btn-primary"
      type="button"
    >
      Print Factsheet
    </button>
  );
}
