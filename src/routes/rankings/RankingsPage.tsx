import ContentWrapper from "../../components/ContentWrapper";
import RankingQuery from "./rankings-components/RankingQuery";
import RankingsTab from "./rankings-components/RankingsTab";

function RankingsPage() {
  return (
    <ContentWrapper>
      <RankingsTab />
      <RankingQuery />
    </ContentWrapper>
  );
}

export default RankingsPage;
