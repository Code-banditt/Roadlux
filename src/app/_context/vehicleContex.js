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

import { Alert } from "../hooks/Toast";

const vehicleContext = createContext();

export function VehicleProvider({ children }) {
  //pop up state

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
