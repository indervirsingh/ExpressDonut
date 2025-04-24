/**
 * Food item representation matching backend API schema
 * @interface Food
 * @property {string} id - Unique database identifier
 * @property {string} name - Display name for the food item
 * @property {string} imageUrl - CDN URL for food image
 * @property {number} stars - Average rating (1-5 scale)
 * @property {string[]} tags - Categorization labels
 * @property {boolean} favorite - User-specific favorite status
 */
export interface Food {
    id: string;
    name: string;
    imageUrl: string;
    stars: number;
    tags: string[];
    favorite: boolean;
}
