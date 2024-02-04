import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getLibraries = async () => {
    const response = await axios.get( `${baseUrl}/libraries` );
    return response.data;
};

export const getLibraryById = async ( id : number | string ) => {
    const response = await axios.get( `${baseUrl}/libraries/${id}` );
    return response.data;
};
