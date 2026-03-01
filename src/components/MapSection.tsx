import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// 1. Personnalisation de l'icône (Prakash utilise une icône personnalisée)
const customIcon = new L.Icon({
  iconUrl: '../../public/favicontif.ico', // Tu peux mettre ton propre SVG/PNG
  iconSize: [64, 64],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapSection = () => {
  const position = [46.5197, 6.6323]; // Ta position en Suisse 🇨🇭

  return (
    <section className="container mx-auto px-4 py-12">
      {/* 2. Le conteneur avec bords arrondis et ombre comme sur son site */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-2xl">
        
        <div className="h-[400px] w-full">
          <MapContainer 
            center={position} 
            zoom={12} 
            scrollWheelZoom={false}
            className="h-full w-full z-0"
          >
            {/* 3. Utilisation des tuiles "Voyager" de CartoDB (plus propres que OSM par défaut) */}
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            
            <Marker position={position} icon={customIcon}>
              <Popup>
                <span className="font-medium">Salut ! Je suis ici. 🇨🇭</span>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* 4. Effet de badge flottant (optionnel, présent sur certains portfolios) */}
        <div className="absolute bottom-4 left-4 z-[1000] bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm text-sm font-medium">
          📍 Basé à Lausanne, Suisse
        </div>
      </div>
    </section>
  );
};

export default MapSection;