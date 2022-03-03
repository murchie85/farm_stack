from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # lets fastapi talk to react


# APP project 
app = FastAPI()


# Allow permission between origins Python/react

origins = ['https://localhost:3000'] # this list used below

app.add_middleware(
    CORSMiddleware,
    allow_origins     = origins,
    allow_credentials = True,
    allow_methods     = ["*"],
    allow_headers     = ["*"],
)



@app.get('/')
def read_root():
    return({"Hello":"Adam!"})


# -------GET

@app.get('/api/todo')
async def get_todo():
    return 1 

# -------GET BY ID

@app.get('/api/todo{id}')
async def get_todo_by_id(id):
    return 1 

# -------POST

@app.post('/api/todo')
async def post_todo(todo):
    return 1 

# -------PUT

@app.put('/api/todo{id}')
async def put_todo(id, data):
    return 1 

# -------DELETE

@app.delete('/api/todo{id}')
async def delete_todo(id):
    return 1 