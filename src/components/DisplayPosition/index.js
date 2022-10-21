import { useCallback, useEffect, useState } from 'react';

function DisplayPosition({ map }) {
    const [position, setPosition] = useState(() => map.getCenter())

    const onMove = useCallback(() => {
      setPosition(map.getCenter())
    }, [map])
  
    useEffect(() => {
      map.on('move', onMove)
      return () => {
        map.off('move', onMove)
      }
    }, [map, onMove])
  
    return (
      <div className='headerMap'>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:"10px", width:'100%'}}>
            <h3>
              Latitude: {position.lat.toFixed(4)}, Longitude: {position.lng.toFixed(4)}
            </h3>
        </div>
     </div>
    )
  }
export default DisplayPosition;
