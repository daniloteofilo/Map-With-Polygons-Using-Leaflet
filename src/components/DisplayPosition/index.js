import { useCallback, useEffect, useState } from 'react';


function DisplayPosition({ map }) {
    const fortaleza = [-3.7327, -38.5270]
    const france = [48.8566, 2.3522]
    const zoom = 8
    const [position, setPosition] = useState(() => map.getCenter())
    const urlBrazilFlagImage = 'url(https://gifs.eco.br/wp-content/uploads/2021/09/gifs-da-bandeira-do-brasil-7.gif)'
    const urlFranceFlagImage = 'url(https://gifs.eco.br/wp-content/uploads/2021/09/gifs-da-bandeira-da-franca-0.gif)'
    
    const [adress, setAdress] = useState(undefined)
    useEffect(() => {
        if (position.lng>-180.0000&&position.lng<180.0000){fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${position.lat.toFixed(4)}&lon=${position.lng.toFixed(4)}&limit=5&appid=3a83507ecac72bc50d213404c3f54f5b`)
        .then((response) => response.json())
        .then((json) => setAdress(json));
    }else{
        alert('Se você tentar dar a volta ao mundo, a api de ler as cidades ficara desativada, sugiro que você de um F5 na tela para que o leitor de cidades volte a funcionar');
        onClickFortaleza()
        setPosition(map.getCenter())
    }}
        , [adress]);


    const onClickFortaleza = useCallback(() => {
      map.setView(fortaleza, zoom)
    }, [map])
    const onClickFrance = useCallback(() => {
      map.setView(france, zoom)
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
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:"10px", width:'65%'}}>
            <h3>
            Latitude: {position.lat.toFixed(4)}, Longitude: {position.lng.toFixed(4)}
            </h3>
            {adress?.map((item) => (
                <h3 style={{fontSize:'15px'}}>Cidade: {item?.name}, {item?.country}</h3>
            ))}
        </div>
        
        <div className='countryContainer' style={{backgroundImage:(urlBrazilFlagImage)}} onClick={onClickFortaleza}></div>
        <div className='countryContainer' style={{backgroundImage:(urlFranceFlagImage)}} onClick={onClickFrance}></div>
     </div>
    )
  }
export default DisplayPosition;
