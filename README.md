# Aphrodite GraphQL Starter

This provides a basic NodeJS example project that uses `Aphrodite` and integrates `GraphQL`.

See `src/domain.aphro` and how `& GraphQL` extensions are used.

Note -- this is a WIP and still buggy.

Known issues:
1. Connections are not complete
2. Connections return the wrong type! oops!
3. Mutations are not implemented at all
4. Custom root calls are not yet supported

- The schema is located in `src/domain.aphro`
- A simple application is in `src/main.ts`

# Getting Started

First, clone this repository

```bash
git clone git@github.com:tantaman/aphrodite-graphql-starter.git
```

Next, cd to `aphrodite-graphql-starter` and install dependencies.

```bash
cd aphrodite-graphql-starter
npm install
```

The commands to build and run are the "demo app" are:

```bash
npm run build
npm run start
```

If you change the schema and want to re-generate the generated code, run

```bash
npm run aphro
```

For more info, see the `Aphrodite` [quickstart guide](https://aphrodite.sh/docs/quickstart)
