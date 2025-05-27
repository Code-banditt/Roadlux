"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import EditProfileModal from "../_components/EditModal";
import { supabase } from "../lib/spabase";
import { Alert, showError } from "../hooks/Toast";
import { fetchCustomer } from "../lib/library";
import Brand from "../_components/brand";
import Image from "next/image";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const handleclick = () => {
    router.push("/api/auth/signout");
  };

  const [profile, setProfile] = useState(null); // State for profile data

  useEffect(() => {
    const insertSession = async () => {
      if (!session) return;

      if (status === "loading") {
        return <div>Loading...</div>; // Or a skeleton
      }

      try {
        // Step 1: Check if session already exists
        const { data: existingSession, error: fetchError } = await supabase
          .from("CustomerInformation")
          .select("*")
          .eq("email", session.user.email)
          .single();

        if (fetchError && fetchError.code !== "PGRST116") {
          // Handle error if it's not a "no data" error
          Error("Fetch error:", fetchError);
          return;
        }

        if (!existingSession) {
          const { error: insertError } = await supabase
            .from("CustomerInformation")
            .insert({
              email: session.user.email,
              name: session.user.name,
            });

          if (insertError) {
            showError("Insert error:", insertError);
          } else {
            Alert("Session inserted successfully!");
          }
        } else {
          Alert("Session already exists, skipping insert.");
        }
      } catch (err) {
        showError("Unexpected error:", err);
      }
    };

    insertSession();
  }, [session, status]);

  const Page = () => {
    const session = useSession(); // assuming this exists
    const [profile, setProfile] = useState(null);

    const ProfileInfo = useCallback(async () => {
      if (!session) return;

      try {
        const data = await fetchCustomer(session.user.email);
        setProfile(data);
        Alert("Profile fetched successfully");
      } catch (error) {
        showError("Error fetching profile:", error.message);
      }
    }, [session]); // memoized based on session

    useEffect(() => {
      if (session) {
        ProfileInfo();
      }
    }, [session, ProfileInfo]); // ✅ this is now okay
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
        <Brand />
      </div>

      <div className="min-h-screen bg-base-200 flex items-center justify-center p-8">
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <figure className="px-10 pt-10">
            <Image
              src={session?.user?.image}
              alt="profile"
              width={200}
              height={200}
              className="rounded-xl"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">{session?.user?.name}</h2>
            <p className="text-base text-gray-500">
              {profile ? profile.email : "loading.."}
            </p>

            <div className="divider border-t-2 " />

            <div className="flex flex-col w-full gap-3">
              <span>About Me</span>
              <span>{profile ? profile.about : "loading.."}</span>
            </div>

            <div className="card-actions mt-6">
              <span className="w-full">
                <EditProfileModal />
              </span>

              <button onClick={handleclick} className="btn btn-outline w-full">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
