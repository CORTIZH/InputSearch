import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor() { }

  //Endpoint to retrieve all people information
  async getSWAPI(page?:any){
    
    return await axios({
      method: 'get',
      url: (`https://swapi.dev/api/people/`),
      headers:{},
      params:{
        page:page
      }
    
    }).then( response =>{
      //console.log( response.data.results )
      return response.data.results
    }).catch( error =>{
      console.log(error)
       
    }).finally(()=>{
      return false
    })

  }

  //Endpoint to retrieve all information with search params
  async getSWAPISEARCH(search?:any,page?:any){
    
    return await axios({
      method: 'get',
      url: (`https://swapi.dev/api/people/`),
      headers:{},
      params:{
        search:search,
        page:page
      }
    
    }).then( response =>{
      //console.log( response.data.results )
      return response.data.results
  
    }).catch( error =>{
      console.log(error)
    
    }).finally(()=>{
      return false
    })

  }

  //Endpoint to retrieve person’s information
  async getSWAPIID(id:any){
    
    return await axios({
      method: 'get',
      url: (`${id}` ),
      headers:{},
    
    }).then( response =>{
      //console.log( response.data )
      return response.data
    }).catch( error =>{
      console.error(error)
      return error
    })

  }

}
