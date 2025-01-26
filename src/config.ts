const { SERVER_HOST, SERVER_PORT, DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } = process.env


if ( SERVER_PORT === undefined || SERVER_HOST === undefined || DISCORD_CLIENT_ID === undefined || DISCORD_CLIENT_SECRET === undefined) {
    console.log('No ENV')
    process.exit(1)
}


export default {
    app: {
        host: SERVER_HOST,
        port: SERVER_PORT
    },
    discord: {
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET
    }
}