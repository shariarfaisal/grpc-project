

function createUser(call,callback) {
  return callback(null,{
    users: {
      ...call.request
    }
  })
}


module.exports = {
  createUser
}
