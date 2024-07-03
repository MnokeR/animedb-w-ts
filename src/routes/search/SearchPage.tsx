import { Outlet } from "react-router-dom";
import ContentWrapper from "../../components/ContentWrapper";
import SearchField from "./components/SearchField";

function SearchPage() {
  return (
    <ContentWrapper>
      <SearchField />
      <Outlet />
    </ContentWrapper>
  );
}

export default SearchPage;
