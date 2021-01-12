const BASE_URL=process.env.NODE_ENV=="development"?`http://localhost:4000`:`https://aspiring-coders-backend.herokuapp.com`;
const URL_SUFFIX=`/api/coders`
export const API_URL=`${BASE_URL}${URL_SUFFIX}`
export const EXT_API_URL_BASE=`https://competitive-coding-api.herokuapp.com/api/codechef/`;
export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
