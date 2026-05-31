# TypeScript Node.js Template

A minimal TypeScript Node.js project template with Express.js, featuring hot-reload development, path aliases, and integrated linting.

## Features

- TypeScript for type safety
- Express.js v5 web framework
- Hot reload with Nodemon
- Path aliases (`@/` for `src/`)
- Prettier for code formatting
- ESLint for code quality and linting
- Environment variable support with dotenv
- Docker support

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Quick Start

Use this template to create a new project instantly:

```bash
npx degit maliciousmuffins3/express-app new-project-name
cd new-project-name
npm install
```

## Getting Started

### 1. Clone the Repository

If you prefer to clone directly:

```bash
git clone https://github.com/maliciousmuffins3/express-app.git
cd express-app
```

Or use the template (recommended):

```bash
npx degit maliciousmuffins3/express-app my-project
cd my-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
NODE_ENV=development
```

Add environment-specific values as needed:

```env
# .env.development
PORT=3500
```

```env
# .env.production
PORT=5000
```

### 4. Run the Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The server will start at `http://localhost:4000` by default, or use the port specified in your environment.

### 5. Build for Production

Compile TypeScript to JavaScript:

```bash
npm run build
```

This will generate compiled JavaScript files in the `dist/` directory.

### 6. Run Production Build

After building, run the production server:

```bash
npm start
```

## Available Scripts

| Script             | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start development server with hot reload |
| `npm run build`    | Compile TypeScript to JavaScript         |
| `npm start`        | Run the production build                 |
| `npm run lint`     | Lint code with ESLint                    |
| `npm run lint:fix` | Lint and auto-fix issues                 |

## Project Structure

```text
ts-node-template/
├── src/
│   ├── config/
│   │   ├── env.ts          # Environment configuration
│   │   └── index.ts        # Config exports
│   ├── helpers/
│   │   └── loadEnv.ts      # Environment loader
│   └── server.ts           # Express server entry point
├── dist/                   # Compiled JavaScript (generated)
├── .env                    # Base environment variables (not tracked)
├── .env.development        # Development environment values (not tracked)
├── .env.production         # Production environment values (not tracked)
├── .gitignore              # Git ignore rules
├── Dockerfile              # Docker image definition
├── eslint.config.mts       # ESLint configuration
├── nodemon.json            # Nodemon configuration
├── package.json            # Project metadata and dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Code Quality Tools

### ESLint

This project uses ESLint with TypeScript support and Prettier integration. The configuration includes:

- TypeScript recommended rules
- Prettier integration
- Node.js globals

Lint your code:

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

## Environment Variables

Available environment variables:

| Variable   | Description         | Default       |
| ---------- | ------------------- | ------------- |
| `PORT`     | Server port         | `4000`        |
| `NODE_ENV` | Runtime environment | `development` |

## Docker

Build the image:

```bash
docker build -t my-app .
```

Run the container:

```bash
docker run -p 4000:3000 -e NODE_ENV=production -e PORT=3000 my-app
```

## Troubleshooting

### Module Not Found

If you encounter module resolution errors:

1. Delete `node_modules/` and `package-lock.json`
2. Run `npm install` again
3. Restart your development server

### ESLint Errors

If ESLint reports errors after updating:

1. Clear ESLint cache: `npx eslint --clear-cache`
2. Restart your editor/IDE
3. Run `npm run lint:fix` to auto-fix issues

## Author

Matthew Roxas

## Support

For issues and questions, please open an issue in the GitHub repository.
