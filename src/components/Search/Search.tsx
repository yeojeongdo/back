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
  const [value, onChangeValue, setValue] = useInput(valueList[0]);

  const submit = useCallback(
    (avalue?: string) => {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(
        avalue ? avalue : value,
        (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            searchMap(data, avalue ? avalue : value);
          }
        },
        {
          y: markerState.LatLng.lat,
          x: markerState.LatLng.lng,
          sort: SortBy.DISTANCE,
        }
      );
      setSearchModal(true);
    },
    [value, searchMap, markerState, setSearchModal]
  );

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
          {value !== ""
            ? searchMapListState.searchMapList.map(current => (
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
              ))
            : valueList.map(current => (
                <SearchListItem
                  onClick={() => {
                    submit(current);
                    setValue(current);
                  }}
                >
                  <div>
                    <p>{current}</p>
                  </div>
                </SearchListItem>
              ))}
        </SearchList>
      )}
    </SearchContainer>
  );
};

export default Search;
