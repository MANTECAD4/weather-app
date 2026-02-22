export interface GeoCodingReverseBigDataCloudResponse {
  latitude: number;
  lookupSource: string;
  longitude: number;
  localityLanguageRequested: string;
  continent: string;
  continentCode: string;
  countryName: string;
  countryCode: string;
  principalSubdivision: string;
  principalSubdivisionCode: string;
  city: string;
  locality: string;
  postcode: string;
  plusCode: string;
  localityInfo: LocalityInfo;
}

export interface LocalityInfo {
  administrative: Ative[];
  informative: Ative[];
}

export interface Ative {
  name: string;
  description?: string;
  isoName?: string;
  order: number;
  adminLevel?: number;
  isoCode?: string;
  wikidataId?: string;
  geonameId?: number;
}
