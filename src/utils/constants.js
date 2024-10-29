export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_LANGUAGE_AUTH
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const CONST_LANGUAGES = [
  {identifier : "en" , name : "English",},
  {identifier : "hindi" , name : "Hindi",},
  {identifier : "tamil" , name : "Tamil",},
]


