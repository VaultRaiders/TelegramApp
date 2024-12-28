import Image from "next/image";
import ListInactiveBot from "./components/ListInactiveBot";
import LinearBackground from "@/components/common/LinearBackground";
import PageHeading from "@/components/common/PageHeading";

const History = () => {
  return (
    <div className="relative w-full">
      <div className="absolute h-96 w-full">
        <Image src="/assets/bg-history.png" fill alt="Banner" />
        <div className="absolute h-full w-full bg-gradient-to-b from-transparent from-50% to-black"></div>
      </div>
      <div className="relative top-5 h-12">
        <PageHeading title="historical acts" />
      </div>
      <div className="p-2 pb-40 pt-36">
        <ListInactiveBot />
      </div>
    </div>
  );
};

export default History;
