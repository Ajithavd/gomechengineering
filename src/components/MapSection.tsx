import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { motion } from "framer-motion";
import { Search, Plus, Minus, RotateCcw } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Chennai Ambattur SIDCO coordinates (exactly match Google Maps URL)
const position: [number, number] = [13.1018723, 80.1609356];
const defaultZoom = 17;
// const googleMapsUrl = "https://www.google.com/maps/place/Go+Mech+Engineering/@13.1018723,80.1609356,17z";
// const googleMapsUrl =
//   "https://www.google.com/maps/dir/?api=1&destination=13.1018723,80.1609356&travelmode=driving";

  const googleMapsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=13.1018723,80.1635105&travelmode=driving";

/**
 * Custom Branded Marker Icon
 * Creates a glowing pulse marker in Go Mech Engineering's primary red-orange branding.
 */
const customIcon = L.divIcon({
  html: `
    <div class="relative flex items-center justify-center marker-container" role="button" aria-label="Open Go Mech Engineering location in Google Maps" tabindex="0">
      <div class="absolute -inset-3 rounded-full bg-red-500/15 blur-sm animate-pulse marker-glow transition-all duration-300"></div>
      <div class="absolute w-8 h-8 rounded-full border-[2px] border-red-500/30 animate-ping opacity-60"></div>
      <div class="relative w-5 h-5 bg-[#EF4444] border-[3px] border-white rounded-full shadow-[0_4px_12px_rgba(239,68,68,0.5)] transition-all duration-300 marker-core hover:scale-125"></div>
    </div>
  `,
  className: "custom-leaflet-marker",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16]
});

interface MapControlsProps {
  center: [number, number];
  defaultZoom: number;
}

/**
 * Custom Floating Controls (Bottom-Right Panel)
 * Replaces default Leaflet controls with premium glassmorphic actions.
 */
const MapControls = ({ center, defaultZoom }: MapControlsProps) => {
  const map = useMap();

  const handleZoomIn = () => {
    map.zoomIn();
  };

  const handleZoomOut = () => {
    map.zoomOut();
  };

  const handleReset = () => {
    map.setView(center, defaultZoom, {
      animate: true,
      duration: 1.2,
    });
  };

  return (
    <div 
      onClick={(e) => e.stopPropagation()}
      className="absolute bottom-6 right-6 z-[1000] flex flex-col gap-2.5 pointer-events-auto"
    >
      {/* Zoom In */}
      <button
        onClick={handleZoomIn}
        type="button"
        title="Zoom In"
        aria-label="Zoom In"
        className="w-12 h-12 flex items-center justify-center backdrop-blur-md bg-white/80 hover:bg-white/95 border border-white/40 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.1)] text-foreground hover:text-[#EF4444] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <Plus size={20} />
      </button>

      {/* Zoom Out */}
      <button
        onClick={handleZoomOut}
        type="button"
        title="Zoom Out"
        aria-label="Zoom Out"
        className="w-12 h-12 flex items-center justify-center backdrop-blur-md bg-white/80 hover:bg-white/95 border border-white/40 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.1)] text-foreground hover:text-[#EF4444] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <Minus size={20} />
      </button>

      {/* Reset View */}
      <button
        onClick={handleReset}
        type="button"
        title="Reset View"
        aria-label="Reset View"
        className="w-12 h-12 flex items-center justify-center backdrop-blur-md bg-white/80 hover:bg-white/95 border border-white/40 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.1)] text-foreground hover:text-[#EF4444] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <RotateCcw size={18} />
      </button>
    </div>
  );
};

/**
 * Component to automatically open the marker popup on map mount and keep it open.
 */
const OpenPopupOnLoad = () => {
  const map = useMap();
  React.useEffect(() => {
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.openPopup();
      }
    });
  }, [map]);
  return null;
};

const MapSection = () => {
  const handleMapRedirect = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      const target = e.target as HTMLElement;
      // Prevent opening Google Maps if user clicks on controls or search bar
      if (target.closest(".pointer-events-auto") || target.closest(".leaflet-control")) {
        return;
      }
    }

    // Check if user is on a mobile device (iOS / Android)
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);

    if (isMobile) {
      // Tapping on mobile opens Google Maps app if available, otherwise website
      window.location.href = googleMapsUrl;
    } else {
      // Desktop behavior
      window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleMapRedirect(e);
    }
  };

  return (
    <section id="map" className="w-full px-6 md:px-12 lg:px-24 py-12 md:py-16 max-w-[1600px] mx-auto bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClickCapture={handleMapRedirect}
        onKeyDown={handleKeyDown}
        className="relative w-full h-[380px] sm:h-[500px] lg:h-[650px] rounded-[32px] overflow-hidden shadow-2xl border border-secondary cursor-pointer premium-map-container focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        aria-label="Open Go Mech Engineering location in Google Maps"
        role="button"
        tabIndex={0}
      >
        {/* Floating Search-Style UI (Top-Left) */}
        <div 
          onClick={(e) => e.stopPropagation()}
          className="absolute top-6 left-6 z-[1000] pointer-events-auto flex items-center gap-3 backdrop-blur-md bg-white/75 border border-white/30 px-5 py-3 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] max-w-[320px] transition-all duration-300 hover:bg-white/85"
        >
          <Search size={18} className="text-muted-foreground" />
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-extrabold leading-none mb-1">
              Corporate Office
            </span>
            <span className="text-sm font-semibold text-foreground leading-none">
              Go Mech Engineering
            </span>
          </div>
        </div>

        {/* Map Container */}
        <MapContainer
          center={position}
          zoom={defaultZoom}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          boxZoom={false}
          keyboard={false}
          dragging={false}
          touchZoom={false}
          className="w-full h-full"
        >
          {/* CartoDB Positron Tile Layer (Premium Minimal Light Map Theme) */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />

          {/* Branded Marker with Popup */}
          <Marker position={position} icon={customIcon}>
            <Popup 
              className="custom-leaflet-popup"
              closeOnClick={false}
              autoClose={false}
              closeButton={false}
            >
              <div 
                className="p-1 min-w-[185px] text-left group"
                aria-label="Open Go Mech Engineering location in Google Maps"
              >
                <h4 className="font-extrabold text-sm text-foreground mb-1 relative inline-block">
                  Go Mech Engineering
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#EF4444] transition-all duration-300 group-hover:w-full" />
                </h4>
                <p className="text-xs text-muted-foreground font-medium mb-2 leading-relaxed">
                  CNC MILLING & TURNING SOLUTIONS
                </p>
                <div className="border-t border-secondary my-1.5" />
                <p className="text-xs text-foreground/80 leading-relaxed font-semibold">
                  Ambattur, Chennai
                  <br />
                  Tamil Nadu, India
                </p>
              </div>
            </Popup>
          </Marker>

          {/* Automatically open the popup on mount */}
          <OpenPopupOnLoad />

          {/* Custom Controls */}
          <MapControls center={position} defaultZoom={defaultZoom} />
        </MapContainer>
      </motion.div>
    </section>
  );
};

export default MapSection;

