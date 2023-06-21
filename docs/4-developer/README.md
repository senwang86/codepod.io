# Developer Manual

The development repository is https://github.com/codepod-io/codepod. Please also check https://github.com/codepod-io/codepod/doc/onboarding.md for the development framework and system architecture description.

The docker compose files are in `compose/dev` folder. The `dev` stack mounts the
`src` folder, so that you can edit the files on your local computer, and let the
node.js process inside the container do the compiling and hot-reloading.

To install docker-compose, follow the official [Docker documentation](https://docs.docker.com/compose/install/linux/).

## .env file

First, create a `dev/.env` file with the following content (leave as is or change the value to
whatever you want).

```properties
POSTGRES_USER=myusername
POSTGRES_PASSWORD=mypassword
POSTGRES_DB=mydbname
JWT_SECRET=mysupersecretjwttoken

GOOGLE_CLIENT_ID=<google oauth client id>

EXPORT_AWS_S3_REGION=us-west-1
EXPORT_AWS_S3_BUCKET=<YOUR_BUCKET_NAME>
EXPORT_AWS_S3_ACCESS_KEY_ID=<YOUR_ACCESS_KEY>
EXPORT_AWS_S3_SECRET_ACCESS_KEY=<YOUR_SECRET_ACCESS_KEY>
```

Optional:

- Leave the `GOOGLE_CLIENT_ID` empty if you do not need the OAuth provided by Google.
- `EXPORT_AWS_S3_XXX` are used for file export. You could leave it empty if you don't use it.

## Start the stack

```bash
cd dev
docker compose up -d
```

You need to initialized the database first before starting the stack. See below.

Wait a few minutes for the package installation and compilation. Once the `ui` and
`api` containers are ready, go to `http://localhost:80` to see the app.

- `http://localhost:80/graphql`: Apollo GraphQL explorer for the backend APIs
- `http://prisma.127.0.0.1.sslip.io`: Prisma Studio for viewing and debugging the database.

## Initialize the database

If this is your first time running it, you would need to initialize the database as it's empty. To do that, open a shell into the API container and run:

```bash
npx prisma migrate dev
```

This command is also needed after the database schema is changed. The protocol is:

- One developer changed the schema `./api/prisma/schema.prisma`. He will run
  `npx prisma migrate dev --name add_a_new_field`. This will generate a
  migration.
  The schema change along with this migration need to be checked in to git.
- Another developer pulls the change, then running the `npx prisma migrate dev` (in the api container's shell) to apply the schema change.

## Auto-completion & Linting

Although we developed this project using docker, we still want features like auto-completion and linting while coding. For that to work, you need to install the all the relevant node packages, i.e.

```bash
# api, proxy, runtime, ui
cd ./api/

# Run 'npm install' instead if you are using npm
yarn
```
