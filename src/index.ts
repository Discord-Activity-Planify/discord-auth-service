import express, { json, urlencoded, Request, Response } from 'express';
import config from './config';
import { corsMiddleware } from './middlewares/corsMiddleware';

async function main(): Promise<void> {
    const app = express();
    const port = config.app.port;
    const host = config.app.host;
    const { client_id, client_secret } = config.discord;

    app.use(json())
    app.use(urlencoded({ extended: true}))
    app.use(corsMiddleware);

    
    app.post("/api/v1/token", async (req: Request, res: Response) => {

        // Exchange the code for an access_token
        const response = await fetch("https://discord.com/api/oauth2/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            client_id: client_id,
            client_secret: client_secret,
            grant_type: "authorization_code",
            code: req.body.code,
          }),
        });
      
        // Retrieve the access_token from the response
        const resp = await response.json();
        if (resp.error != undefined) {
          res.status(400).send(resp);
          return;
        }
        const { access_token } = resp
      
        // Return the access_token to our client as { access_token: "..."}
        res.send({access_token});
      });

    app.listen(port, () => console.log(`Server is running on http://${host}:${port}`))
}
main()