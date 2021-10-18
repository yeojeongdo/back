import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import useCreate from "hooks/redux/useCreate";
import useSearch from "hooks/redux/useSearch";
import useInput from "hooks/useInput";
import React, { useCallback } from "react";
import { SearchContainer } from "./searchStyles";

enum SortBy {
  DISTANCE = "distance",
}

const Search = () => {
  const { markerState } = useCreate();
  const { searchMap, searchMapListState } = useSearch();
  const [value, onChangeValue] = useInput(searchMapListState.searchValue);

  const submit = useCallback(() => {
    const ps = new kakao.maps.services.Places();
    // const bounds = new kakao.maps.LatLngBounds()
    ps.keywordSearch(
      value,
      (data, status) => {
        // const bounds = new kakao.maps.LatLngBounds()
        if (status === kakao.maps.services.Status.OK) {
          data && console.log(data);
          // console.log(data);
          searchMap(data, value);
        }
      },
      {
        y: markerState.LatLng.lat,
        x: markerState.LatLng.lng,
        sort: SortBy.DISTANCE,
      }
    );
  }, [value, searchMap, markerState]);

  return (
    <SearchContainer>
      <Form hasSubmit submitText="검색" onSubmit={submit}>
        <Input
          value={value}
          onChange={onChangeValue}
          placeholder="검색할 내용을 입력해 주세요"
        />
      </Form>
    </SearchContainer>
  );
};

export default Search;
