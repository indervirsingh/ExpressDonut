/**
 * Food item representation matching backend API schema
 * @interface Food
 * @property {string} id - Unique database identifier
 * @property {string} name - Display name for the food item
 * @property {number} price - Price of the food item
 * @property {string} imageUrl - CDN URL for food image
 * @property {string} image_url - CDN URL for food image
 * @property {number} stars - Average rating (1-5 scale)
 * @property {string[]} tags - Categorization labels
 * @property {boolean} favorite - User-specific favorite status
 */
export interface Food {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    image_url: string;
    stars: number;
    tags?: string[];
    favorite: boolean;
}
