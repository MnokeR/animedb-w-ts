import { WrapperProps } from "../../types/wrappers";
import DisplayCard from "./DisplayCard";

interface DisplayStyleProps {
  style: "full" | "rows";
  id: number;
  image: string;
  title: string;
}

function DisplayStyle({ style, id, image, title }: DisplayStyleProps) {
  if (style === "rows")
    return (
      <div className="flex flex-wrap justify-center gap-3 w-[170px]">
        <DisplayCard id={id} image={image} title={title} />
      </div>
    );
  // if (style === "full")
  //   return (
  //     <div className="">
  //       <DisplayCard />
  //     </div>
  //   );
}

export default DisplayStyle;
