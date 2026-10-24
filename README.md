# HappyRobot

Empty app scaffolded with the official `create-next-app` starter: Next.js App Router, React, TypeScript, Tailwind CSS, and ESLint.

## Development

Use Node.js 22.13 or newer (`nvm use` selects Node 22).

```sh
npm install
npm run dev
```

Open http://localhost:3000. Start building the UI in `app/page.tsx`; add server endpoints with `app/api/<name>/route.ts` and server-side logic with Server Components or Server Actions.

## Checks and production

```sh
npm run lint
npm run build
npm start
```

The original workspace is preserved in `_previous/`, ignored by Git and excluded from TypeScript checks. Its environment and deployment configuration are retained there for reference.
