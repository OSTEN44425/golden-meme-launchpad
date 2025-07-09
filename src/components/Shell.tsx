
import React from "react";

interface ShellProps {
  children: React.ReactNode;
}

export const Shell = ({ children }: ShellProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {children}
    </div>
  );
};
