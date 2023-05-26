import api from '../../api/api';


export interface HomeResponse {
    message: string
    data: Publications[]
  }
  
  export interface Publications {
    _id: string
    owner: string
    ownerName: string
    maxSitters: number
    title: string
    description: string
    extraInfo: string
    location: string
    dateStart: string
    dateEnd: string
    pets: Pet[]
    perks: string[]
    contact: string
    petSitter: any
    status: string
  }
  
  export interface Pet {
    name: string
    type: string
  }

    // Dates from 2023-06-27T00:00:00.000+00:00 to 2023-06-27
  const mapResponse = (data: Publications[]) => {
    return data.map((home) => {
        return {
            ...home,
            dateStart: home.dateStart.split('T')[0],
            dateEnd: home.dateEnd.split('T')[0],
        }
    })
    }


export const getHomes = async () => {
    try{
        const response = await api.get<HomeResponse>('/publications');

        return mapResponse(response.data.data);
    }catch(error){
        console.log(error);
        return [];
    }
}