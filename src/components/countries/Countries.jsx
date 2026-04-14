import { use } from "react"
import Country from "../Country/Country"
import "./Countries.css"



export default function Countries({countriesPromise})  {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries 
    

    return (
        <div id="countries">
            
            <h1 className="box-style">Hello world</h1>
            {
                countries.map( country => <Country key = {country.cca3.cca3}country = {country}> </Country>  )
            }
        </div> 
    )  
}
