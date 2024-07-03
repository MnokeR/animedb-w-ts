import { Outlet } from "react-router-dom";
import ContentWrapper from "../../components/ContentWrapper";
import SearchField from "./components/SearchField";
import Heading from "../../components/Heading";

function SearchPage() {
  return (
    <ContentWrapper>
      <SearchField />
      <Heading heading={["SEARCH", "RESULTS"]} />
      <Outlet />
    </ContentWrapper>
  );
}

export default SearchPage;
