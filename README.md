# ArkTech Discord Bot

Discord bot for the ArkTech Discord server.

## Installation

1. Clone the repository

```bash
git clone https://github.com/ArkTechOrg/ArkTech-Discord-Bot
```

2. Go to the project directory

```bash
cd ArkTech-Discord-Bot
```

3. Install dependencies

```bash
npm i
```

4. Create a `.env.development` file in the root of the project and add the following environment variables (replace the values with your own):

```bash
PORT=3000
MONGO_URI="mongodb://localhost:27017/ArkTech-Discord-Bot"
```

5. Start the server in development mode

```bash
npm run dev
```
> The RESTful API Server will start on `http://localhost:3000`