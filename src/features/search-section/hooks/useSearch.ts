import { useDebounce } from "@uidotdev/usehooks";
import { useRef, useState } from "react";
import { getLocations } from "../actions/get-locations";
import { useQuery } from "@tanstack/react-query";
import { Location } from "../../../shared/interfaces/geo-coding.interface";

export const useSearch = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  //   const anchorEl = useRef<HTMLDivElement>(null);
  const [queryString, setQueryString] = useState<string>("");
  const debouncedQueryString = useDebounce(queryString, 1500);
  const isMenuOpen = anchorEl !== null && debouncedQueryString !== "";
  const id = debouncedQueryString !== "" ? "location-options" : undefined;

  const locationsQuery = useQuery<Location[]>({
    queryFn: () => getLocations(debouncedQueryString),
    queryKey: ["locations", debouncedQueryString],
    enabled: debouncedQueryString !== "",
    initialData: [],
    refetchOnWindowFocus: false,
    // staleTime: 1000 * 60 * 15,
  });

  return {
    anchorEl,
    isMenuOpen,
    queryString,
    locationsQuery,
    setAnchorEl,
    id,
    setQueryString,
    debouncedQueryString,
  };
};
