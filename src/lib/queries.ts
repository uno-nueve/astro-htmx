import { supabase } from "./supabase";

export const createUserProfile = async (user: {
    name: string;
    username: string;
}) => {
    const { error } = await supabase
        .from("UserProfiles")
        .insert({ name: user.name, username: user.username })
        .select();
};
