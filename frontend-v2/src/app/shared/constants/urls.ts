import { environment } from "src/environments/environment";

const BASE_URL = environment.production
    ? `${environment.apiUrl}:${environment.apiPort}`
    : `http://localhost:${environment.apiPort}`;

export const FOODS_URL = `${BASE_URL}/api/foods`;
export const FOODS_BY_ID_URL = (id: string) => `${FOODS_URL}/${id}`;
export const FOODS_FAVORITE_URL = (id: string) => `${FOODS_BY_ID_URL(id)}/favorite`;
