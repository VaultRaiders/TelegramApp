import Image from "next/image";

const Layout = ({ children }: IChildren) => {
  return (
    <div
      className="relative min-h-dvh"
      style={{
        backgroundImage: "url('/assets/bg-create.png')",
        backgroundSize: "495px 1051px",
        backgroundPositionX: "center",
      }}
    >
      <div className="absolute left-1/2 top-0 w-full -translate-x-1/2">
        <Image
          src="/assets/bg-create-top.png"
          alt="create"
          width={495}
          height={142.5}
          className="!static object-contain"
        />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
};

export default Layout;
