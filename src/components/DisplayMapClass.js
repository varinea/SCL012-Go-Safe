// src/DisplayMapClass.js
import * as React from 'react';
import { Map, TileLayer, Marker, Polyline } from 'react-leaflet'

const hereAcces = {
  key: 'luAvmoHbQUvxSVLucOwLZlrXOQ9JvIjUWuYPjqU1nsY',
  id: 'BCARpYuX4JTbLbCE7nfW',
  code: 'UsxeE6O5hDR3RWxAwgjnDA'
}
export class DisplayMapClass extends React.Component {
  constructor(props) {
    super(props);
  this.mapRef = React.createRef();
  this.handleClick= this.handleClick.bind(this)
  this.newRoute= this.newRoute.bind(this)
  this.componentDidMount= this.componentDidMount.bind(this)
  this.componentWillUnmount= this.componentWillUnmount-bind(this)

  this.state = {
    // The map instance to use during cleanup
    
    tapPosition:[],
      markerPosition: {
        lat:null,
        lng:null},
        map: null,
      polyline:[]
  }
   }

  componentDidMount() {

    const H = window.H;
    const platform = new H.service.Platform({
        apikey: "{HERE-API-KEY}"
    });

    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        // This map is centered over Europe
        center: { lat: 50, lng: 5 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    this.setState({ map });
  }

  handleClick(event) {
    //console.log(event.latlng.lat, event.latlng.lng)
    let position = [event.latlng.lat, event.latlng.lng]
    console.log (position)
    this.setState({tapPosition: [...this.state.tapPosition, position]}) 
    
    let polyPosition = {lat:event.latlng.lat, lng:event.latlng.lng}
    this.setState({polyline: [...this.state.polyline, polyPosition]})

    let latPosition = event.latlng.lat
    let lngPosition = event.latlng.lng
    this.setState({markerPosition: {lat: latPosition, lng: lngPosition}})

    console.log(this.state.markerPosition)
  }

  async createPolyline (url){
    
  }

  async newRoute() {
    
    let shape = []
    let shapeA = this.state.tapPosition.map(e => shape.push('['+e+']'))
    let overlayName = 'OVERLAYTIER'
    let paramURL = `http://cre.api.here.com/2/overlays/upload.json?map_name=${overlayName}&overlay_spec=[{"op":"override","shape":[${shape}],"layer":"LINK_ATTRIBUTE_FCN","data":{"VEHICLE_TYPES":"0"}}]&storage=readonly&app_id=${hereAcces.id}&app_code=${hereAcces.code}`

    paramURL = paramURL.replace(/\[/g, '%5B')
    paramURL = paramURL.replace(/\]/g, '%5D')
    paramURL = paramURL.replace(/\{/g, '%7B')
    paramURL = paramURL.replace(/\}/g, '%7D')

    console.log(paramURL)

    const data = await fetch (paramURL).then(res => res.json())
    console.log(data)


  }

  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }

  render() {
    return (
      // Set a height on the map so it will display
      <div ref={this.mapRef} style={{ height: "500px" }} />
    );
  }
}


export default DisplayMapClass;