const Layout = ({ children }: IChildren) => {
  return (
    <div
      className="min-h-dvh"
      style={{
        backgroundImage: "url('/assets/bg-create.png')",
        backgroundSize: "495px 1051px",
        backgroundPositionX: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
