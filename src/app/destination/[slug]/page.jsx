"use client";
import Destinationcontent from "@/components/Destinationcontent/page";
import { Suspense } from "react";

const Destination = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Destinationcontent />
    </Suspense>
  );
};

export default Destination;
