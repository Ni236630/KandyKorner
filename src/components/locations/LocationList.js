import React, { useEffect, useContext } from "react";
import { LocationContext } from "./LocationsProvider";
import { LocationCard } from "./LocationCard";
import "./Location.css";

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="locations">
      {console.log("happy birthday", locations)}
      {locations.map((l) => {
        return <LocationCard key={l.id} location={l} />;
      })}
    </div>
  );
};
