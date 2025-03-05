import { connect, ConnectOptions } from 'mongoose'

export const dbConnect = () => {
    connect(process.env.MONGO_URI! || 'mongodb+srv://indervirsingh:JIG5I8Ok12gRfREC@emails.gfxdggc.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connected successfully"),
        (error) => console.log(error)
    )
}