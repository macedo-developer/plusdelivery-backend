import mongoose from 'mongoose'

const URI =
  'mongodb+srv://renataUser:adminRenata@plusdelivery.azbga.mongodb.net/plusdelivery?retryWrites=true&w=majority'

const dbConnect = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
  })
  console.log('Database connect')
}

export default dbConnect
