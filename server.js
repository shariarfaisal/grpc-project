const grpc = require('grpc')
const path = require('path')
const PATH_PROTO = path.join(__dirname,'./outer.proto')
const outer = grpc.load(PATH_PROTO).outer
const UserController = require('./controllers/user')


function main() {
  const server = new grpc.Server()
  server.addService(outer.User.service,UserController)
  server.bind('0.0.0.0:50051',grpc.ServerCredentials.createInsecure())
  server.start()
}

main()
