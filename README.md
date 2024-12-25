# Vault Raiders 🧙‍♂️

Vault Raiders is an innovative blockchain game that integrates advanced AI technology at its core. Players can create and interact with AI-powered bots, each with unique personalities and capabilities. The game leverages blockchain to ensure secure and transparent transactions, providing a seamless and immersive gaming experience. Join the adventure and explore the endless possibilities with Vault Raiders!

## API

### Profile

```
curl --location 'http://localhost:3000/api/v1/user/me'
```

### Leaderboard

```
curl --location 'http://localhost:3000/api/v1/user/leaderboard'
```

### Game status (number user, number bot, total pools,...)

```
curl --location 'http://localhost:3000/api/v1/bot/stats'
```

### Create bot

```
curl --location --request POST 'http://localhost:3000/api/v1/bot' \
--header 'Content-Type: application/json' \
--data '{
    "displayName": "Bot1",
    "prompt": "abcxyz",
    "password": "a",
    "photoUrl": "photo",
    "initPrice": "1000000000000000",
}'
```

### List bots

```
curl --location 'http://localhost:3000/api/v1/bot'
```

### Bot detail

```
curl --location 'http://localhost:3000/api/v1/bot/:botId'
```

### Bot chat history

```
curl --location 'http://localhost:3000/api/v1/bot/:botId/chat-history'
```

### Buy ticket chat

```
curl --location 'http://localhost:3000/api/v1/bot/:botId/buy-ticket' \
--header 'Content-Type: application/json' \
--data '{
    "password": "a"
}'
```

### Start chat

```
curl --location --request POST 'http://localhost:3000/api/v1/bot/:botId/start'
```
