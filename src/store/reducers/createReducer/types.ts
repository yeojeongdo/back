import { searchMapListType } from "../searchReducer/types";

export interface LatLng {
  lat: number;
  lng: number;
}

export interface CreateState {
  LatLng: LatLng;
  selectedMarker?: searchMapListType;

  createAlbumLoading: boolean;
  createAlbumError: null;
  createAlbumDone: boolean;
}
