"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "thor_advisor_attest";

export function AdvisorGate({ children }: { children: React.ReactNode }) {
  // null = not yet checked (avoids hydration flash), false = not attested, true = attested
  const [attested, setAttested] = useState<boolean | null>(null);

  useEffect(() => {
    setAttested(sessionStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  if (attested === true) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white">
      {attested === false && (
        <div className="fixed inset-0 z-50 flex items-center justify-center gradient-navy px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 md:p-10 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-navy-800 mb-4">
              For Financial Professionals Only
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              The following materials contain hypothetical model performance and are
              intended exclusively for investment professionals. By continuing you
              confirm that you are a financial professional acting in a professional
              capacity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  sessionStorage.setItem(STORAGE_KEY, "true");
                  setAttested(true);
                }}
                className="btn-primary px-6 py-3"
              >
                I am a financial professional
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
              >
                Return to homepage
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
