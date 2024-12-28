import Dot from "./Dot";
import LinearBackground from "./LinearBackground";

const PageHeading = ({ title }: { title: string }) => {
  return (
    <LinearBackground>
      <div className="relative flex items-center justify-center gap-2 p-2 px-20 text-2xl uppercase text-primary">
        <Dot />
        <p
          style={{
            fontFamily: "JimNightshade",
          }}
          className="text-[#F8C46B]"
        >
          {title}
        </p>
        <Dot />
      </div>
    </LinearBackground>
  );
};
export default PageHeading;
