import { connect, ConnectOptions } from 'mongoose'

const MONGO_URI ="mongodb+srv://indervirsingh:JIG5I8Ok12gRfREC@emails.gfxdggc.mongodb.net/?retryWrites=true&w=majority"
export const dbConnect = () => {
    connect(MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connected successfully"),
        (error) => console.log(error)
    )
}