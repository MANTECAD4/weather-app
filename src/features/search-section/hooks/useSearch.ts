import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Location } from "../../../interfaces/geo-coding.interface";
import { locationQuery } from "../../../queries/location.query";
import {
  LocationCoordinates,
  useLocation,
} from "../../../providers/app-state/useLocation";

type LocationOptions = {
  name: string;
  locationDetails: string;
  coordinates: LocationCoordinates;
};

export const useSearch = () => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const [queryString, setQueryString] = useState<string>("");

  const { setLocationCoordinates, setLocationDetails, setName } = useLocation();

  const debouncedQueryString = useDebounce(queryString, 1500);
  const isMenuOpen = debouncedQueryString !== "" && isInputActive;

  const id = debouncedQueryString !== "" ? "location-options" : undefined;

  const locationsQuery = useQuery<Location[]>(
    locationQuery(debouncedQueryString),
  );

  const handleLocationSelection = (options: LocationOptions) => {
    const { coordinates, locationDetails, name } = options;
    setName(name);
    setLocationDetails(locationDetails);
    setLocationCoordinates(coordinates);
    setIsInputActive(false);
  };

  return {
    isMenuOpen,
    queryString,
    locationsQuery,
    id,
    setQueryString,
    setIsInputActive,
    isInputActive,
    debouncedQueryString,
    handleLocationSelection,
  };
};
