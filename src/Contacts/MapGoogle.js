import React from 'react';
import ReactDOM from 'react-dom'
import GoogleMapReact from 'google-map-react';
import icon from './map-marker.svg'
// import vector from './../../public/assets/images/home/map-marker.svg';

const AnyReactComponent = ({ text }) => <div style={{'backgroundImage':`url(${icon})`}}>{text}</div>;

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  componentDidMount() {
    this.loadMap();

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }


  render() {
  console.log(this.props)

    return (
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCcbtw2lQHyWXkKwICgtcSPH6oCTEhukBo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >        
          <AnyReactComponent         
            lat={59.955413}
            lng={30.337844}
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;