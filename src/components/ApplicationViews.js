import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationsProvider"
import { LocationList } from "./locations/LocationList"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>    
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
        </>
    )
}