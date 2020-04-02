import * as React from 'react';

export const DisplayMapFC = () => {
  // Crea una referencia al elemento HTML en el que queremos poner el mapa
  const mapRef = React.useRef(null);

  /**
   * Crear la instancia del mapa
   * Si bien `useEffect` también podría usarse aquí,` useLayoutEffect` representará
   * el mapa antes
   */
  React.useLayoutEffect(() => {
   // `mapRef.current` será` undefined` cuando este enlace se ejecute por primera vez; caso de borde que
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "{kgSdjqerT-AJ-VhQvIwifffAhb9AuVu7LK3gMkbIweA}"
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: {lat:-33.447487, lng:-70.673676},
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);
    
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


    // Esto actuará como una limpieza para ejecutarse una vez que este hOOK vuelva a ejecutarse.
        // Esto incluye cuando el componente se desmonta
    return () => {
      hMap.dispose();
    };
  }, [mapRef]); // Esto ejecutará este enlace cada vez que se actualice esta referencia
  onClick={this.handleClick} 

  return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
  <button onClick={this.newRoute}>Crear Ruta</button>
};

export default DisplayMapFC;