var config = {
  redis: {
    host: "127.0.0.1",
    port: 6379,
    db: 0
  },
  mongo: {
    url: "mongodb://localhost:27017/TopicPack"
  },
  github: {
    url: "https://api.github.com/search/repositories",
    username: "naveennagan"
  }
}
module.exports = config;