export interface LatLng {
  lat: number;
  lng: number;
}

export interface CreateState {
  LatLng: LatLng;
  createAlbumLoading: boolean;
  createAlbumError: null;
  createAlbumDone: boolean;
}
