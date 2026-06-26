from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request Model
class StatusUpdate(BaseModel):
    status: str

# Load Data
def load_quotes():
    with open("quotes.json", "r") as file:
        return json.load(file)

# Save Data
def save_quotes(data):
    with open("quotes.json", "w") as file:
        json.dump(data, file, indent=4)

# GET All Quotes
@app.get("/quote-requests")
def get_quotes():
    return load_quotes()

# Update Status
@app.post("/quote-requests/{quote_id}/status")
def update_status(quote_id: int, update: StatusUpdate):

    quotes = load_quotes()

    for quote in quotes:
        if quote["id"] == quote_id:
            quote["status"] = update.status
            save_quotes(quotes)
            return quote

    return {"error": "Quote not found"}