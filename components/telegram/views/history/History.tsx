import Image from "next/image";
import ListInactiveBot from "./components/ListInactiveBot";

const History = () => {
  return (
    <div className="relative">
      <div className="absolute h-96 w-full">
        <Image src="/assets/bg-history.png" fill alt="Banner" />
        <div className="absolute h-full w-full bg-gradient-to-b from-transparent from-50% to-black"></div>
      </div>
      <div className="relative top-5 flex h-12 w-[.9] flex-col items-center justify-center">
        <div
          style={{
            zIndex: 1,
            fontFamily: "JimNightshade",
            color: "#F8C46B",
          }}
          className="relative text-center text-2xl font-thin tracking-wider"
        >
          HISOTRICAL ACTS
        </div>
        <div className="absolute left-0 top-0 flex h-full w-full justify-center">
          <div
            className="h-full w-[90%]"
            style={{
              background:
                "linear-gradient(to right, rgba(28, 25, 22, 0.3) 30%, rgba(155, 135, 62, 0.4) 50%, rgba(28, 25, 22, 0.3) 70%",
              borderTop: "2px solid rgba(155, 135, 62, .2)",
              borderBottom: "2px solid rgba(155, 135, 62, .2)",
            }}
          ></div>
        </div>
      </div>
      <div className="p-2 pb-40 pt-36">
        <ListInactiveBot />
      </div>
    </div>
  );
};

export default History;
