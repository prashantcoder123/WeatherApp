import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
 const [weatherInfo, setWeatherInfo] = useState({
    city: "WonderLand",
    feelslike:24.84,
    temp:25.05,
    tempMin:25.05,
    tempMax:29.05,
    humidity:47,
    Weather: "haze",
 });

 let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
 }


    return(
        <div style={{textAlign:"center"}}>
            <h1>this is weather app</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info ={weatherInfo}/>
        </div>
    )
}