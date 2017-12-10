import {Weather} from '../model/weather';

// mapping data from openweather api
export function mapWeatherDetails(list:any):Array<Weather>{
    if(!Array.isArray(list)){
        return []
    } 
    let mappedList:Array<Weather>=[];
    mappedList = list.map((item)=>{
        let desc= item && item.weather[0] && item.weather[0].description?item.weather[0].description:null;
        let windSpeed =  item &&  item.wind &&  item.wind.speed? item.wind.speed:null;
        let temp= item && item.main && item.main.temp ?item.main.temp:null;
        let date = item && item.dt_txt?item.dt_txt:null;
        let obj:Weather= new Weather(desc,windSpeed,temp,date);
        return obj;
    });

    return mappedList;
}