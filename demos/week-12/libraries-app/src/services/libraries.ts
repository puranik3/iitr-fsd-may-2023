import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getLibraries = async () => {
    const response = await axios.get( `${baseUrl}/libraries` );
    return response.data;
};

export const getLibraryById = () => {
    axios.get( `http://localhost:3001/libraries` )
};
