"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  Suspense,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import loadvehicles from "../lib/library";
import { bookVehicles } from "../lib/library";
import { Alert } from "../hooks/Toast";

const vehicleContext = createContext();

export function VehicleProvider({ children }) {
  //pop up state
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const vehicleID = searchParams.get("vehicleID"); // Grab the vehicleID from URL
  const [booking, bookinginprogress] = useState(true);
  //
  const [vehicles, setVehicles] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [filters, setfilters] = useState({ model: "", make: "" });
  const [isloading, setisLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 3;

  //insert state

  //////////////////////////////////////////
  //////////////////////////////////////////
  //////////////////////////////////////////
  //////////////////////////////////////////
  //PAGINATION and api call
  useEffect(() => {
    async function fetchVehicles() {
      setisLoading(true);
      const response = await loadvehicles(
        page,
        pageSize,
        filters.model,
        filters.make
      );
      setVehicles(response.data || []);
      setTotalCount(response.totalCount || 0);
      setisLoading(false);
    }
    fetchVehicles();
  }, [page, filters]);

  //next page
  function onNext() {
    setPage((prev) => prev + 1);
  }

  //prev page
  function onPrevious() {
    setPage((prev) => Math.max(1, prev - 1));
  }

  //pagecount
  function hasNextPage() {
    return page < Math.ceil(totalCount / pageSize);
  }

  function hasPreviousPage() {
    return page > 1;
  }

  //FILTER LOGIC
  ///////////////////////
  //////////////////////////
  /////////////////////////////
  ///////////////////////////////
  /////////////////////////////////

  // 🔹 Handle filter clicks
  const handleBrandClick = (model, make) => {
    setfilters({ model, make }); // Apply the filter immediately
    Alert(`filtering by ${model}`);
    setPage(1);
  };

  const handleMakeClick = (make) => {
    const update = { ...filters, make };
    setfilters(update);
    Alert(`filtering by ${make}`);
    setPage(1);
  };

  // 🔹 Function to fetch filtered data
  const clearFilter = function () {
    setfilters({ model: "", make: "" });
    setPage(1);
  };

  ////////////////////////////POP UP LOGIC
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////
  ///////////////////////////////////////
  //select vehicle logic
  useEffect(() => {
    console.log(vehicles);
    if (vehicleID && vehicles.length > 0 && !selectedVehicle) {
      // Ensure vehicles are loaded before searching
      console.log("Searching for vehicleID:", vehicleID);

      // Find the vehicle by matching vehicleID
      const vehicle = vehicles.find(
        (v) => v.vehicleID === parseInt(vehicleID, 10)
      ); // Ensure comparison as integers

      if (vehicle) {
        console.log("Found vehicle:", vehicle);
        setSelectedVehicle(vehicle);
      } else {
        console.log("Vehicle not found in:", vehicles);
      }
    }
  }, [vehicleID, vehicles, selectedVehicle]); // Runs when vehicleID or vehicles updates

  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(vehicle); // Set vehicle for popup
    router.push(`/store?vehicleID=${vehicle.vehicleID}`); // Update URL with vehicleID
  };

  useEffect(() => {
    if (selectedVehicle) {
      // Only log if selectedVehicle is not null
      console.log("Updated selectedVehicle:", selectedVehicle);
    }
  }, [selectedVehicle]); // Runs when selectedVehicle changes

  //close pop up logic
  const closePopup = () => {
    setSelectedVehicle(null); // Clear popup state
    router.push("/store"); // Reset URL
  };

  //
  const handleRated = () => {
    Alert(`Thanks for the feedback`);
  };

  ///////////////////////////////////
  //////////////////////////////////
  /////////////////////////////////
  //RETURN
  return (
    <vehicleContext.Provider
      value={{
        vehicles,
        setVehicles,
        page,
        totalCount,
        handleBrandClick,
        handleMakeClick,
        clearFilter,
        onNext,
        onPrevious,
        hasNextPage,
        hasPreviousPage,
        handleVehicleClick,
        closePopup,
        selectedVehicle,
        handleRated,
        setisLoading,
        isloading,
      }}
    >
      {children}
    </vehicleContext.Provider>
  );
}

export function useVehicleContext() {
  return useContext(vehicleContext);
}
