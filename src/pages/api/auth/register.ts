// export const prerender = false;
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const firstName = formData.get("first-name")?.toString();
    const lastName = formData.get("last-name")?.toString();

    if (!email || !password || !firstName || !lastName) {
        return new Response("Email and password are required", { status: 400 });
    }

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                first_name: firstName,
                last_Name: lastName,
            },
        },
    });

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    return redirect("/signin");
};
