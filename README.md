# Guide to Run the Discord Auth Service
this service provide discord authentication

This guide provides step-by-step instructions to set up and run the service.

#### Prerequisites
1. Ensure you have [Node.js](https://nodejs.org/) installed (preferably the latest LTS version).
2. Install `npm` (comes bundled with Node.js).

---

## 1. Install Node.js and npm
Ensure you have Node.js and npm installed on your system. You can download and install them from [Node.js official website](https://nodejs.org/).

To verify the installation:
```bash
node -v
npm -v
```

---

## 2. Install Dependencies
Run the following command to install the required dependencies:

```bash
npm install
```

---

## 3. Update the Config File

Example `config.ts`:
```javascript
export default {
    app: {
        host: localhost,
        port: 3003
    },
    discord: {
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET
    }
};
```

---

## 4. Compile TypeScript to JavaScript
Run the following command to compile TypeScript files into JavaScript:

```bash
tsc
```

The compiled JavaScript files will be located in the `dist` directory.

---

## 5. Run the Service
Start the application using the compiled JavaScript files:

```bash
node dist
```

---
