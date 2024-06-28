import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/header/Header";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}

export default Root;
