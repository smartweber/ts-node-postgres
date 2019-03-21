# Full-stack TypeScript Development Framework

This project is a starting point for developing an API-first application using TypeScript, Node.js, and Postgres.

## Technologies Used
- [TypeScript](http://www.typescriptlang.org/)
- Backend
    - [Node.js](https://nodejs.org)
    - [Express](https://expressjs.com/)
    - [tsoa](https://github.com/lukeautry/tsoa)
        - Generates Express Routes from TypeScript controllers
        - Generates [OpenAPI ("Swagger")](https://swagger.io/docs/specification/about) specification, enabling automatic documentation and client library generation
    - [PostgreSQL](https://www.postgresql.org/) as RDBMS
        - [TypeORM](http://typeorm.io) for code-first database migrations
            - Optional: ORM-like queries
    - [Redis](https://redis.io/) for caching/messaging
- Developer environment
    - [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose) for non-Node.js project dependencies
    - Single `start` script that live reloads the API, UI, and related services
    - VSCode [launch.json](./.vscode/launch.json) settings have been included to allow debugging
- Testing
    - Mocha/Chai tests for API

## Getting Started

### System Requirements
- [Node.js 8+](https://nodejs.org/en/download/)
- [docker](https://www.docker.com) and [docker-compose](https://docs.docker.com/compose)
- [yarn](https://yarnpkg.com/en)

### Starting the app
- `yarn` to install dependencies
- `yarn start` to start environment

![alt text](dev/docs/shell.png "Developer experience")

## Database Operations

### Creating a new migration
- Create a new class under [the entities directory](./api/database/entities) extending from [base.ts](./api/database/entities/base.ts)
    - See [user.ts](./api/database/entities/user.ts) as an example
    - Review [TypeORM documentation](http://typeorm.io) for the full migration API
- `yarn db:migrate`

### Update database with pending migrations
- `yarn db:update`

