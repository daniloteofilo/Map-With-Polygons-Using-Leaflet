import { useCallback, useEffect, useState } from 'react';
import data from '../../dataBackEnd/PropertiesList.json'



console.log(data[0].polygons[0][0].especie);
function DisplayPosition({ map }) {
    const coordinatesProperty1 = [-3.7269, -38.5585]
    const coordinatesProperty2 = [-4.2618, -38.9331]
    const coordinatesProperty3 = [-5.0728, -37.9895]
    const zoom = 18
    const [position, setPosition] = useState(() => map.getCenter())
    const [adress, setAdress] = useState(undefined)
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${position.lat.toFixed(4)}&lon=${position.lng.toFixed(4)}&limit=5&appid=3a83507ecac72bc50d213404c3f54f5b`)
        .then((response) => response.json())
        .then((json) => setAdress(json));
    }, [adress]);

    const onClickProperty1 = useCallback(() => {
      map.setView(coordinatesProperty1, zoom)
    }, [map])
    const onClickProperty2 = useCallback(() => {
      map.setView(coordinatesProperty2, zoom)
    }, [map])
    const onClickProperty3 = useCallback(() => {
      map.setView(coordinatesProperty3, zoom)
    }, [map])


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
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:"10px", width:'60%'}}>
            <h3>
            Latitude: {position.lat.toFixed(4)}, Longitude: {position.lng.toFixed(4)}
            </h3>
            {adress?.map((item) => (
                <h3 style={{fontSize:'15px'}}>Cidade: {item?.name}, {item?.state}, {item?.country} </h3>
            ))}
        </div>
        <div style={{display:'flex', justifyContent:'space-around', width:'40%'}}>
          <h4 className='buttonsProperty' onClick={onClickProperty1}>Propriedade 1</h4>
          <h4 className='buttonsProperty' onClick={onClickProperty2}>Propriedade 2</h4>
          <h4 className='buttonsProperty' onClick={onClickProperty3}>Propriedade 3</h4>
        </div>
     </div>
    )
  }
export default DisplayPosition;
