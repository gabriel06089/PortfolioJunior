import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from 'react'
import maplibregl from 'maplibre-gl'
import { ThemeContext } from '../../../../contexts/ThemeContext'
import {
  defaultTheme,
  defaultThemeDark,
} from '../../../../styles/themes/default'
import icon from '../../../../assets/Map-Pin.svg'

const MapLibreMap = ({ style }: { style: string }) => {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map-container',
      style,
      center: [-38.5267, -3.7793], // Coordenadas de Fortaleza (longitude, latitude)
      zoom: 5, // Nível de zoom inicial
    })

    map.on('load', () => {
      // Adicione um marcador personalizado com o seu ícone
      map.addSource('marker-source', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-38.5267, -3.7393], // Coordenadas da sua localização
              },
            },
          ],
        },
      })

      const img = new Image()
      img.src = icon
      img.onload = () => {
        map.addImage('custom-icon', img)
      }

      map.addLayer({
        id: 'marker-layer',
        type: 'symbol',
        source: 'marker-source',
        layout: {
          'icon-image': 'custom-icon', // Nome do ícone personalizado
          'icon-size': 0.8, // Tamanho do ícone
          'icon-allow-overlap': true,
          'icon-ignore-placement': true,
          'icon-anchor': 'bottom', // Âncora do ícone (ajuste conforme necessário)
        },
      })
    })

    // Limpe o mapa ao desmontar o componente
    return () => map.remove()
  }, [style])

  return (
    <div
      id="map-container"
      style={{ width: '100%', height: '20rem', borderRadius: '32px' }}
    />
  )
}

const MapContainer = () => {
  const { theme } = useContext(ThemeContext)
  const mapStyle =
    theme === defaultTheme
      ? 'https://api.maptiler.com/maps/streets/style.json?key=wbgydw4rI3an4Xz4VI9T'
      : 'https://api.maptiler.com/maps/streets-dark/style.json?key=wbgydw4rI3an4Xz4VI9T'

  const mapComponent = useMemo(() => {
    return <MapLibreMap style={mapStyle} />
  }, [mapStyle])

  return mapComponent
}

export default MapContainer
