# chat/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer
# from views import get_latest_game_record

class GameConsumer(AsyncWebsocketConsumer):
    # def fetch_game_records(self, data):
    #     game_records = get_latest_game_record()

    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        playerOneScore = text_data_json['playerOneScore']
        playerTwoScore = text_data_json['playerTwoScore']
        playerOnesTurn = text_data_json['playerOnesTurn']
        playerTwoCounter = text_data_json['playerTwoCounter']



        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
              'type': 'game_update',
              'playerOneScore': playerOneScore,
              'playerTwoScore': playerTwoScore,
              'playerOnesTurn': playerOnesTurn,
              'playerTwoCounter': playerTwoCounter,
            }
        )

    # Receive message from room group
    async def game_update(self, event):
        playerOneScore = event['playerOneScore']
        playerTwoScore = event['playerTwoScore']
        playerOnesTurn = event['playerOnesTurn']
        playerTwoCounter = event['playerTwoCounter']


        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'playerOneScore': playerOneScore,
            'playerTwoScore': playerTwoScore,
            'playerOnesTurn': playerOnesTurn,
            'playerTwoCounter': playerTwoCounter
        }))