const LinearBackground = ({ children }: any) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #665D4F 54%, rgba(0, 0, 0, 0) 100%)",
        border: "Mixed solid",
        borderWidth: "1px 0px 1px 0px",
        borderImageSource:
          "linear-gradient(90deg, #1C1916 0%, #9B873E 48.5%, #1C1916 100%)",
        borderImageSlice: 30,
      }}
    >
      {children}
    </div>
  );
};

export default LinearBackground;
