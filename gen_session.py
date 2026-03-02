from telethon.sync import TelegramClient
from telethon.sessions import StringSession

API_ID = int(input("Enter API_ID: "))
API_HASH = input("Enter API_HASH: ")

with TelegramClient(StringSession(), API_ID, API_HASH) as client:
    print("\n=== YOUR NEW SESSION STRING ===\n")
    print(client.session.save())
    print("\n=== COPY THIS STRING INTO TG_SESSION_STRING ===\n")
