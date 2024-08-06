import { column, defineDb, defineTable } from "astro:db";

const User = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        name: column.text(),
        username: column.text(),
    },
});

// https://astro.build/db/config
export default defineDb({
    tables: { User },
});
