export class Weather{
   constructor( 
               public description: string,
               public windSpeed:number,
               public temperature: number,
               public date:string   ){
                     this.windSpeed=windSpeed;
                     this.description = description;
                     this.temperature = temperature;
                     this.date = date;
               } 
 }
