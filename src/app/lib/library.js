import "dotenv/config";

import { supabase } from "./spabase";

/**
 * Fetch paginated vehicles from Supabase
 * @param {number} page - The current page number
 * @param {number} pageSize - The number of items per page
 * @returns {Promise<{data: any[], totalCount: number}>}
 */

//vehicle api's

export default async function loadvehicles(
  page = 1,
  pageSize = 10,
  model = null,
  make = null
) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase.from("vehicles").select("*", { count: "exact" });

  if (model) query = query.eq("model", model);
  if (make) query = query.eq("make", make);

  query = query.range(from, to);

  let { data, count, error } = await query;

  if (error || !data) {
    console.error("Error fetching vehicles:", error);
    return { data: [], totalCount: 0 }; // Ensure it returns an empty array
  }

  return { data, totalCount: count };
}

export async function bookVehicles(bookingData) {
  const { data, error } = await supabase
    .from("rentalTransaction")
    .insert([bookingData])
    .select("*");

  if (error) {
    console.error("Supabase error:", error.message);
    return null; // Prevents crashing
  }

  console.log("Booking inserted successfully:", data);
  return data;
}

//booking api's
export async function fetchBookings(customerID) {
  const { data, error } = await supabase
    .from("rentalTransaction")
    .select("*")
    .eq("customerID", customerID); // <-- this is the fix

  if (error) {
    console.error("Error fetching bookings:", error.message);
    return [];
  }

  console.log("Bookings fetched successfully");
  return data;
}

export async function FindBooking(rentalID) {
  const { data, error } = await supabase
    .from("rentalTransaction")
    .select("*")
    .eq("rentalID", rentalID)
    .single();

  if (error) throw error;
  return data;
}

//favorites api's
export async function AddFavourites(favorite) {
  const { data, error } = await supabase
    .from("favourites")
    .insert([favorite])
    .select("*");
  if (error) throw error;
  return data;
}

export async function fetchFavourites(customer) {
  const { data, error } = await supabase
    .from("favourites")
    .select("*")
    .eq("customer", customer);

  if (error) throw error;
  return data;
}

export async function Delete(id) {
  if (!id || isNaN(id)) {
    throw new Error("Invalid ID provided for deletion.");
  }
  const { data, error } = await supabase
    .from("favourites")
    .delete()
    .eq("id", Number(id));

  if (error) throw error;
  return data;
}

//exchange rate,
export async function getUserCurrency() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return {
      country: data.country_name,
      currency: data.currency,
    };
  } catch (error) {
    console.error("Error fetching user currency:", error);
    return {
      country: "Unknown",
      currency: "USD", // Default fallback
    };
  }
}

export async function getExchangeRate(baseCurrency, targetCurrency) {
  try {
    if (baseCurrency === targetCurrency) return 1;

    const res = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
    );
    const data = await res.json();

    return data.rates[targetCurrency] || 1;
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    return 1;
  }
}

//customer api's
export async function fetchCustomer(email) {
  const { data, error } = await supabase
    .from("CustomerInformation")
    .select("*")
    .eq("email", email)
    .single();

  if (error) throw error;
  return data;
}
