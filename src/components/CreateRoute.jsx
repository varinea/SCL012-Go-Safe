import React, { Component } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet'


const hereAcces = {
  key: 'luAvmoHbQUvxSVLucOwLZlrXOQ9JvIjUWuYPjqU1nsY',
  id: 'BCARpYuX4JTbLbCE7nfW',
  code: 'UsxeE6O5hDR3RWxAwgjnDA' 
}

//const H = window.H
//const map = new H.Map


class CreateRoute extends Component {
  constructor(props) {
    super(props);
    this.handleClick= this.handleClick.bind(this)
    this.newRoute= this.newRoute.bind(this)
    this.state = {

      tapPosition:[]
    }
  }
  
  handleClick(event) {
    //console.log(event.latlng.lat, event.latlng.lng)
    let position = [event.latlng.lat, event.latlng.lng]
    console.log (position)
    this.setState({tapPosition: [...this.state.tapPosition, position]
     })

  }

  async newRoute() {
    
    let shape = []
    let shapeA = this.state.tapPosition.map(e => shape.push('['+e+']'))
    let overlayName = 'OVERLAYTIER'
    let paramURL = `http://cre.api.here.com/2/overlays/upload.json?map_name=${overlayName}&overlay_spec=[{"op":"override","shape":[${shape}],"layer":"LINK_ATTRIBUTE_FCN","data":{"VEHICLE_TYPES":"0"}}]&storage=readonly&app_id=${hereAcces.id}&app_code=${hereAcces.code}`

    console.log(paramURL)

    paramURL = paramURL.replace(/\[/g, '%5B')
    paramURL = paramURL.replace(/\]/g, '%5D')
    paramURL = paramURL.replace(/\{/g, '%7B')
    paramURL = paramURL.replace(/\}/g, '%7D')

    console.log(paramURL)

    const data = await fetch (paramURL)
    const routeShape = await data.json()
    console.log(routeShape)
      

  }

  render() {
  
    const center = {lat:-33.447487, lng:-70.673676}
    const zoom = 12
    return (
      <div>
        <Map
          center={center}
          zoom={zoom}
          onClick={this.handleClick}          
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
                
        </Map>
        <button onClick={this.newRoute}>Crear Ruta</button>
      </div>
    );
  }
}

export default CreateRoute;