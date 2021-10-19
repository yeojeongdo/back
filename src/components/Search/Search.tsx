import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import useCreate from "hooks/redux/useCreate";
import useSearch from "hooks/redux/useSearch";
import useInput from "hooks/useInput";
import React, { useCallback, useState } from "react";
import { SearchContainer, SearchList, SearchListItem } from "./searchStyles";

enum SortBy {
  DISTANCE = "distance",
}

const Search = () => {
  const { markerState } = useCreate();
  const { searchMap, searchMapListState, setCenterSearching, setSearchModal } =
    useSearch();
  const valueList = searchMapListState.searchValue;
  const isModal = searchMapListState.isSearchModal;
  const [value, onChangeValue] = useInput(valueList[valueList.length - 1]);

  const submit = useCallback(() => {
    const ps = new kakao.maps.services.Places();
    // const bounds = new kakao.maps.LatLngBounds()
    // const pp = new kakao.maps.services.Geocoder();
    // pp.transCoord(
    //   markerState.LatLng.lng,
    //   markerState.LatLng.lat,
    //   (result, status) => {
    //     console.log(result, status);
    //   }
    // );
    ps.keywordSearch(
      value,
      (data, status) => {
        // const bounds = new kakao.maps.LatLngBounds()
        if (status === kakao.maps.services.Status.OK) {
          data && console.log(data);
          // console.log(data);
          searchMap(data, [value]);
        }
      },
      {
        y: markerState.LatLng.lat,
        x: markerState.LatLng.lng,
        sort: SortBy.DISTANCE,
      }
    );
    setSearchModal(true);
  }, [value, searchMap, markerState, setSearchModal]);

  return (
    <SearchContainer>
      <Form hasSubmit submitText="검색" onSubmit={submit}>
        <Input
          value={value}
          onChange={onChangeValue}
          onClick={() => setSearchModal(true)}
          placeholder="검색할 내용을 입력해 주세요"
        />
      </Form>
      {isModal && (
        <SearchList>
          {searchMapListState.searchMapList.map(current => (
            <SearchListItem
              onClick={() => {
                setCenterSearching(current);
                setSearchModal(false);
              }}
            >
              <div>
                <p>{current.place_name}</p>
              </div>
            </SearchListItem>
          ))}
        </SearchList>
      )}
    </SearchContainer>
  );
};

export default Search;
