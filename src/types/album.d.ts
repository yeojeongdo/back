interface Album {
  id: number;
  photo: string;
  user: User;
  createDate: string;
  building: {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
  };
}
