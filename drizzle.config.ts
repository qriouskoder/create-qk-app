import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/server/core/**/*.schema.ts',
  out: './.drizzle/migrations'
} satisfies Config;
