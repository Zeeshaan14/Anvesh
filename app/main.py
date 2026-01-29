from fastapi import FastAPI
from app.routers import automation
from app.db import init_db

app = FastAPI()

# Initialize Database
init_db()

# Include Routers
app.include_router(automation.router)