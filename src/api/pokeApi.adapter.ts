// patron adaptador para axios

import axios from "axios";


// firma del get
export interface HttpAdapter {
  get<T>(url: string): Promise<T>
}

// al implementarlo la clase tiene qu etener si o si el get de la firma
export class PokeFetchAdapter implements HttpAdapter {

  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url)
    const data: T = await resp.json()
    console.log("con fetch")
    return data
  }


}

export class PokeApiAdapter implements HttpAdapter {

  private readonly axios = axios

  // genericos: ahora al usar el get en otro lado (04-injection) puedo ponerle el tipado que va a devolver
  async get<T>(url: string): Promise<T> {
    // peticion get
    const { data } = await this.axios.get<T>(url);
    console.log("con axios")
    return data

  }


  async post(url: string, data: any) {
    // peticion post
  }

  async put(url: string, data: any) {
    // peticion put
  }

  async delete(url: string) {
    // peticion delete
  }




}