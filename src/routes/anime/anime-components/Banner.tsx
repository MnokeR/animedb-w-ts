import { AnimeDetails } from "../../../apis/queries/types/animeDetails";

interface BannerProps {
  data: AnimeDetails;
}

function Banner({ data }: BannerProps) {
  return (
    <div className="-z-40 relative w-full h-[140px] xl:h-[350px] md:h-[260px] sm:h-[300px]">
      <img
        className="absolute w-full h-full object-cover"
        src={data?.Media?.bannerImage}
      />
    </div>
  );
}

export default Banner;
