import { LatLng } from "types/create";

export interface CreateState {
  LatLng: LatLng;
  createAlbumLoading: boolean;
  createAlbumError: null;
  createAlbumDone: boolean;
}
