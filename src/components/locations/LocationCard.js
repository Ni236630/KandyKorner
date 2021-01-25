import React from 'react'
import "./Location.css"

export const LocationCard = ({l}) =>(
  <section className="location">
    <h3 className="location__name">
      {l.name}
    </h3>
    <div className="location__address">
      Address: {l.address}
    </div>
  </section>
)
