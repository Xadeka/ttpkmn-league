# Time Travelers Pokemon League Website

## Table of Contents

- [Site Updates](#site-updates)
  - [Page Locations](#page-locations)
- [Development](#development)
  - [Setup](#setup)
  - [Run Locally](#run-locally)
  - [Build](#build)
  - [Deployment](#deployment)

## Site Updates

Follow the syntax and conventions of the surrounding code. Use components where possible to keep behavior and styles consistent.

Use the configured code formatter, Prettier, to keep the code style consistent. This also reduces conflicts for simple formatting changes.

```shell
# List files not formatted
npm run format-check
# Apply formatter changes
npm run format-fix
```

Any static assets should be placed in [`public/`](./public/). The contents of this folder will be copied to the root of the website on build. This means links to these files start from `/`, and not `/public`, e.g. `href="standings.html"` will show the file at `public/standings.html`.

It is recommend to [run the app locally](#run-locally) to verify any new changes before pushing.

### Page Locations

- Home: [`./src/pages/index.astro`](./src/pages/index.astro)
- Event Results: [`public/event_results.html`](./public/event_results.html)

## Development

This project is built with [Astro](https://astro.build/). Refer to [their documentation](https://docs.astro.build/) for guides and references.

### Setup

This project requires Node.js v24.12.0 and npm.

[nvm](https://github.com/nvm-sh/nvm) is highly recommended to manage both Node.js and npm installations. This project will assume you are using nvm. If not yet installed, follow the [installation steps for nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

The project's node version is saved in `.nvmrc`. nvm will read and use this version for the next steps.

Install the correct Node.js version for the project with the command:

```shell
nvm install
```

Then switch to your system Node.js version temporarily with the command:

```shell
nvm use
```

Optionally, verify the active Node.js version with the command:

```shell
node --version
```

It should print the same node version in `.nvmrc`.

Install project dependencies with npm. You will need to do this whenever `package.json` or `package-lock.json` is changed.

```shell
npm install
# or the shorthand
npm i
```

Finally, [run the project](#run-locally) to verify everything is setup correctly.

### Run Locally

Run the local development server and open the URL it displays. The server will automatically refresh your browser page as files are saved.

```sh
npm run dev
```

Note: If there are errors or something doesn't look like how you'd expect, make sure the latest project dependencies are installed with `npm install`.

### Build

To create a build of the static assets for the website, run the command:

```shell
npm run build
```

The build files will be put in `/dist`. These files can be served locally with the following command:

```shell
npm run preview
```

You can run the build and preview commands to verify all changes locally as they would appear in the deployed site. However, this is not significantly different than using the dev command.

### Deployment

Deployments are managed with Github Workflows and Actions. See [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
