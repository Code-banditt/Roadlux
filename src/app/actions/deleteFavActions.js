import { supabase } from "../lib/spabase";

export async function deleteFavoriteAction(id) {
  try {
    const { data, error } = await supabase
      .from("favourites")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error deleting favorite:", error);
    throw new Error("Failed to delete favorite");
  }
}
