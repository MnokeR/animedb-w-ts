import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAnimeDetails } from "../../apis/queries/queries/getAnimeDetails";
import ContentWrapper from "../../components/ContentWrapper";
import SideBar from "./anime-components/SideBar";
import MainBody from "./anime-components/MainBody";
import Loading from "../../components/Loading";
import Banner from "./anime-components/Banner";

function AnimePage() {
  const { type, animeId } = useParams();

  const animeType = String(type);
  const id = Number(animeId);

  const { data, status, error } = useQuery({
    queryKey: ["animeDetails", animeId, animeType],
    queryFn: () => getAnimeDetails(id, animeType),
    staleTime: 60 * 1000 * 60,
  });

  if (status === "pending") return <Loading />;
  if (status === "error") return `Error: ${error.message}`;
  console.log(data);

  return (
    <>
      <Banner data={data} />
      <ContentWrapper className="flex flex-row flex-wrap xs:flex-nowrap gap-2">
        <SideBar data={data} />
        <MainBody data={data} />
      </ContentWrapper>
    </>
  );
}

export default AnimePage;
