import { useEffect } from 'react';
import './Map.css';
import { Town } from '@maps-directions/maps-directions';
import { usePreventScroll } from './usePreventScroll';
import { useFormDispatch } from '../contexts/form.context';

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
  const dispatch = useFormDispatch();

  useEffect(() => {
    const element = document.getElementById('map');
    if (element == null || towns.length === 0) {
      return;
    }

    const map = new google.maps.Map(element);

    google.maps.event.addListenerOnce(map, 'bounds_changed', function () {
      dispatch({ type: 'setZoom', payload: { zoom: map.getZoom() ?? 0 } });
    });

    const bounds = getBounds(towns);
    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds); // asynchronous

    dispatch({ type: 'setCenter', payload: { center: bounds.getCenter() } });

    for (const [i, town] of towns.entries()) {
      // const coordInfoWindow = new google.maps.InfoWindow();
      // coordInfoWindow.setContent(`${i}. ${town.name}`);
      // coordInfoWindow.setPosition(town.latLng);
      // coordInfoWindow.open(map);

      new window.google.maps.Marker({
        position: town.latLng, // Replace with the marker latitude and longitude
        map: map,
        label: i.toString(),
      });
    }
  }, [towns, dispatch]);

  return <div ref={ref} id="map" style={mapStyles}></div>;
};

//markers=color:green%7Clabel:G%7C40.711614

export default Map;
