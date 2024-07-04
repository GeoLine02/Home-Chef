import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const Map = ({ position, setUserLocation }: any) => {
  const [markerPosition, setMarkerPosition] = useState<any>([51.505, -0.09]);
  console.log(markerPosition);
  useEffect(() => {
    const getMarkedAddress = async () => {
      try {
        const URL = `https://us1.locationiq.com/v1/reverse?key=${
          import.meta.env.VITE_LOCATIONQI_ACCESS_TOKEN
        }&lat=${markerPosition[0]}&lon=${markerPosition[1]}&format=json&`;
        const resp = await fetch(URL);
        if (resp.ok) {
          const data = await resp.json();
          setUserLocation(data);
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMarkedAddress();
  }, [markerPosition]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ChangeView = ({ center }: any) => {
    const map = useMap();
    map.setView(center, 13);

    return null;
  };

  const MapClickHandler = () => {
    useMapEvents({
      click(event) {
        const { lat, lng } = event.latlng;
        if (lat && lng) {
          setMarkerPosition([lat, lng]);
        }
      },
    });
    return null;
  };

  return (
    <div>
      <div className="mt-4">
        <MapContainer className="rounded-lg" center={position} zoom={13}>
          <ChangeView center={position} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickHandler />
          <Marker position={markerPosition} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
