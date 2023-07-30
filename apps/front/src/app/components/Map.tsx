import { useEffect } from 'react';
import './Map.css';
import { Town } from '@maps-directions/maps-directions';
import { usePreventScroll } from './usePreventScroll';

const mapStyles = {
  width: '100%',
  height: '400px',
};

const getBounds = (towns: Town[]): google.maps.LatLngBounds => {
  const bounds = new window.google.maps.LatLngBounds();
  towns.forEach((towns) => bounds.extend(towns.latLng));
  return bounds;
};

interface Props {
  towns: Town[];
}

// https://developers.google.com/maps/documentation/javascript/coordinates
export const Map: React.FC<Props> = ({ towns }) => {
  const ref = usePreventScroll<HTMLDivElement>();

  useEffect(() => {
    if (towns.length === 0) {
      return;
    }

    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement
    );

    const bounds = getBounds(towns);
    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds);

    for (const [i, town] of towns.entries()) {
      const coordInfoWindow = new google.maps.InfoWindow();
      coordInfoWindow.setContent(`${i}. ${town.name}`);
      coordInfoWindow.setPosition(town.latLng);
      coordInfoWindow.open(map);
    }
  }, [towns]);

  return <div ref={ref} id="map" style={mapStyles}></div>;
};

export default Map;
