"use client";
import MapContainerComponent from "@/components/Map/MapContainerComponent";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-center my-4 font-semibold text-4xl">Leaflet Map</h1>
      <MapContainerComponent />
    </div>
  );
};

export default page;
