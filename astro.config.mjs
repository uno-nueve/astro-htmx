import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    output: "server",
    adapter: node({
        mode: "standalone",
    }),
    vite: {
        define: {
            "process.env.SUPABASE_URL": JSON.stringify(
                process.env.SUPABASE_URL
            ),
            "process.env.SUPABASE_ANON_KEY": JSON.stringify(
                process.env.SUPABASE_ANON_KEY
            ),
        },
    },
});
