import Navigation from "@/components/site/navigation";
import React from "react";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className=" h-full">
        <Navigation />
        {children}
      </main>
    </div>
  );
};

export default layout;
