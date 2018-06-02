var config = {
  redis: {
    host: "127.0.0.1",
    port: 6379,
    db: 0
  },
  mongo: {
    url: "mongodb://naveen:naveen12@ds245150.mlab.com:45150/topicpack"
  },
  github: {
    url: "https://api.github.com/search/repositories",
    username: "naveennagan"
  }
}
module.exports = config;