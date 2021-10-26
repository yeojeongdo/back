import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import useCreate from "hooks/redux/useCreate";
import useSearch from "hooks/redux/useSearch";
import useInput from "hooks/useInput";
import { useCallback, useEffect } from "react";
import { SearchContainer, SearchList, SearchListItem } from "./searchStyles";

enum SortBy {
  DISTANCE = "distance",
}

const Search = () => {
  const { markerState } = useCreate();
  const {
    searchMap,
    searchMapListState,
    setCenterSearching,
    setSearchModal,
    searchAutomatic,
  } = useSearch();
  const valueList = searchMapListState.searchValue;
  const isModal = searchMapListState.isSearchModal;
  const [value, onChangeValue, setValue] = useInput(valueList[0]);

  useEffect(
    (searchedValue?: string) => {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(
        searchedValue ? searchedValue : value,
        (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            searchAutomatic(data);
          }
        }
      );
      !searchMapListState.isSearchModal && setSearchModal(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  );

  const submit = useCallback(
    (searchedValue?: string) => {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(
        searchedValue ? searchedValue : value,
        (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            searchMap(data, searchedValue ? searchedValue : value);
          }
        }
      );
      setSearchModal(true);
    },
    [value, searchMap, setSearchModal]
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
            ? searchMapListState.automaticSearchList.map(current => (
                <SearchListItem
                  onClick={() => {
                    setCenterSearching({ lat: current.y, lng: current.x });
                    submit(value);
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
