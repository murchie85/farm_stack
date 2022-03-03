# FARM stack 


![](resources/main.png)
- FastAPI
- React 
- Mongo Db


## Flow

Front end sends http requests to backend 
Backend fetches data from MongoDb
MongoDB returns data to FastAPI
Backend using Axios technology sends response to react front end 


## Dependencies 

```
fastapi == 0.65.1      // web framework

uvicorn == 0.14.0      // web server

motor == 2.4.0         // mongodb driver

npm                    // to create react app)

mongoDB account        // optional

mongoCompass           // to view update db

mongo community server // to develop locally 

```

## Setting up mongoDB

1. `create mongodb account`
2. `create free mongodb cloud instance (yuck)`   **Maybe not necessary, maybe only need server**
3. `Download mongo community server with`  `brew`
4. `download mongodb compass via web`
5. `download mongo shell with` `brew`


**Starting mongodb**  

1. start the service  

` brew services start mongodb-community` 

2. validate it is up with:  
  
`brew services list `    
   
3. Start shell:  

`mongo` or `mongo sh`

4. Open Compass:  
  
Connect locally with: `127.0.0.1:27017`

Or connect to cloud: 

- Login to url `https://cloud.mongodb.com/`
- Get cluster connection string
- Add it to compass as new connection



## MongoDb info

cred in desktop pics loc