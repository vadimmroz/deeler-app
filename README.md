# Deeler App from Vadim

## Overview
This is a Next.js application that uses environment variables stored in `.env` files for configuration.

## Installation

Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

## Environment Variables

Create a `.env` file in the root directory and define your environment variables:

```sh
NEXT_PUBLIC_BACK_URL="https://vpic.nhtsa.dot.gov/api/vehicles"
```

### Environment File Structure
- `.env` – Local development variables
- `.env.production` – Production variables
- `.env.test` – Testing variables

Ensure that sensitive values are not committed to the repository by adding `.env*` to `.gitignore`.

## Running the Application

### Development Mode
```sh
npm run dev
# or
yarn dev
```
Runs the app in development mode at `http://localhost:3000`.

### Production Mode
```sh
npm run build
npm start
# or
yarn build
yarn start
```
Builds and starts the production-ready application.

## Deployment
Deploy the Next.js app to services like Vercel, Netlify, or your own server. Ensure the necessary environment variables are configured in the hosting platform.

## License
This project is licensed under the MIT License.

