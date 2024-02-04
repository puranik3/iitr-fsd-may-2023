import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getGenresForLibrary = async ( id : number | string ) => {
    const response = await axios.get( `${baseUrl}/libraries/${id}/genres` );
    return response.data;
};