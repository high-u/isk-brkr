module.exports = {
  uiPort: 3000,
  mqttReconnectTime: 15000,
  serialReconnectTime: 15000,
  debugMaxLength: 1000,
  flowFile: "flows.json",
  // userDir: process.env.HOME + "/.node-red",
  // nodesDir: process.env.HOME + "/.node-red/nodes",
  httpAdminRoot: "/admin/",
  httpNodeRoot: "/api/",
  adminAuth: {
    type: "credentials",
    users: [{
      username: process.env.NODERED_USERNAME || "admin",
      password: process.env.NODERED_PASSWORD || "$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN.",
      permissions: "*"
    }]
  },
  credentialSecret: "IoT",
  httpNodeCors: {
    origin: process.env.NODERED_CORS_ORIGIN || "*",
    methods: process.env.NODERED_CORS_METHODS || "GET,PUT,POST,DELETE"
  },

  functionGlobalContext: {
  },

  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false
    }
  },
  ui : {
    path: "dashboard"
  }
}
