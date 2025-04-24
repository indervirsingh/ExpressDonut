import { environment } from "src/environments/environment";

const BASE_URL = environment.production
    ? environment.apiUrl
    : `http://localhost:${environment.apiPort}`;


// Use this for testing on local machine    
// const BASE_URL = 'https://expressdonut.onrender.com/api';

// export const FOODS_URL = `${BASE_URL}/api/foods`;
// export const FOODS_BY_ID_URL = (id: string) => `${FOODS_URL}/${id}`;
// export const FOODS_FAVORITE_URL = (id: string) => `${FOODS_BY_ID_URL(id)}/favorite`;


export const FOODS_URL = `${BASE_URL}/foods`;
export const FOODS_TAGS_URL = `${FOODS_URL}/tags`;
export const FOODS_BY_SEARCH_URL = `${FOODS_URL}/search`;
export const FOODS_BY_TAG_URL = `${FOODS_URL}/tag`;
export const FOODS_BY_ID_URL = `${FOODS_URL}/`;