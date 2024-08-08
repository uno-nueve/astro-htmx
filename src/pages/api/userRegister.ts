import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const name = formData.get("name")?.toString();
    const area = formData.get("area")?.toString();

    if (!name || !area) {
        return new Response("Employee name and area are required", {
            status: 400,
        });
    }

    const { error } = await supabase
        .from("employees")
        .insert([{ name: name, area: area }])
        .select();

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    return redirect("/");
};
