import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex bg-gray-100 py-2 mx-2">
      <Button className="bg-[#D72050] rounded">Latest</Button>
      <Marquee pauseOnHover={true}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};
export default BreakingNews;
