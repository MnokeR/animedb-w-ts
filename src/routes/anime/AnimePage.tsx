import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAnimeDetails } from "../../apis/queries/queries/getAnimeDetails";
import ContentWrapper from "../../components/ContentWrapper";
import SideBar from "./anime-components/SideBar";
import MainBody from "./anime-components/MainBody";

function AnimePage() {
  const { type, animeId } = useParams();

  const id = Number(animeId);

  const { data, status, error } = useQuery({
    queryKey: ["animeDetails", animeId, type],
    queryFn: () => getAnimeDetails(id, type),
    staleTime: 60 * 1000 * 60,
  });

  if (status === "pending") return "Loading";
  if (status === "error") return `Error: ${error.message}`;

  return (
    <ContentWrapper className="flex flex-row flex-wrap xs:flex-nowrap gap-2">
      <SideBar data={data} />
      <MainBody data={data} />
    </ContentWrapper>
  );
}

export default AnimePage;
