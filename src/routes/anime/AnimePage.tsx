import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAnimeDetails } from "../../apis/queries/queries/getAnimeDetails";
import ContentWrapper from "../../components/ContentWrapper";
import SideBar from "./anime-components/SideBar";
import MainBody from "./anime-components/MainBody";

function AnimePage() {
  const { animeId } = useParams();
  const { data, status, error } = useQuery({
    queryKey: ["animeDetails", animeId],
    queryFn: () => getAnimeDetails(animeId),
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
