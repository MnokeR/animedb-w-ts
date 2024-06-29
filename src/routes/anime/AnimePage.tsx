import { Outlet } from "react-router-dom";
import ContentWrapper from "../../components/ContentWrapper";
import SideBar from "./anime-components/SideBar";

function AnimePage() {
  return (
    <ContentWrapper className="flex">
      <SideBar />
      <Outlet />
    </ContentWrapper>
  );
}

export default AnimePage;
