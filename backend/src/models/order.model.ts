import { model, Schema, Types } from 'mongoose'

export interface LatLng {
    lat: string
    lng: string
}

export const LatLngSchema = new Schema<LatLng>(
    {
        lat: { type: String, required: true },
        lng: { type: String, required: true }
    }
)