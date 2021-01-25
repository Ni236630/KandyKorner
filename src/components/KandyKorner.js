import React from 'react'
import { Route } from "react-router-dom";
import { LocationList } from './locations/LocationList'
import { LocationProvider } from './locations/LocationsProvider';
import { LocationCard } from './locations/LocationCard';



export const KandyKorner = () => (
  
  <>
  <Route
    render={()=> {
      <LocationProvider>
        <LocationList>
          <LocationCard></LocationCard>
        </LocationList>
      </LocationProvider>
    }}/>
  </>
)
  
