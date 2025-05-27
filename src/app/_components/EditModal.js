"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Alert, showError } from "../hooks/Toast";
import { supabase } from "../lib/spabase";

export default function EditProfileModal() {
  const { data: session } = useSession(); // Assuming you have a session object from your auth provider
  const [about, setAbout] = useState(""); // State for the about field

  const UpdateProfile = async () => {
    if (!session) return null; // Ensure session is available

    try {
      const { data, error } = await supabase
        .from("CustomerInformation")
        .update({ about })
        .eq("email", session.user.email);

      if (error) {
        throw new showError(error.message);
      }

      Alert("Profile updated successfully!");
      console.log("Updated data:", data); // Optional: Log or use updated data
    } catch (err) {
      console.error("Error updating profile:", err.message);
      showError("Error updating profile:", err.message);
    }
  };

  return (
    <form onSubmit={UpdateProfile}>
      {/* Modal Trigger */}
      <label htmlFor="edit-profile-modal" className="btn btn-primary">
        Edit Profile
      </label>

      {/* Modal */}
      <input type="checkbox" id="edit-profile-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-full max-w-lg bg-white text-gray-800 shadow-xl rounded-2xl">
          {/* Modal Header */}
          <h3 className="font-bold text-2xl mb-6 text-center">Edit Profile</h3>

          {/* Profile Picture Preview */}
          <div className="flex justify-center mb-6">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                image
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Profile Picture Upload */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Profile Picture</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
              />
            </div>

            {/* Location */}
            <div className="form-control ">
              <label className="label ">
                <span className="label-text font-medium">Location</span>
              </label>
              <input
                type="text"
                placeholder="Your city, country"
                className="input input-bordered w-full  bg-secondary"
              />
            </div>

            {/* Bio */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Bio</span>
              </label>
              <textarea
                required
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="textarea textarea-bordered w-full bg-secondary"
                placeholder="Tell us about yourself"
              ></textarea>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="modal-action">
            <label htmlFor="edit-profile-modal" className="btn btn-ghost">
              Cancel
            </label>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
