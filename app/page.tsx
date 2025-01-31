import React from "react";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div>
      <div className="text-3xl">HomePage</div>
      <Button variant="outline" size="lg" className="capitalize m-8">
        click me
      </Button>
    </div>
  );
}

export default HomePage;
