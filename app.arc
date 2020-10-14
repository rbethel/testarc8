@app
testarc8

@static

@http
get /app/auth
get /*

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

@aws
region us-east-1
profile outsideops