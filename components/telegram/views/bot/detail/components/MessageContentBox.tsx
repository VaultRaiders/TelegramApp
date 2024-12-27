const MessageContent = ({ content, className, style }: any) => {
  return (
    <div
      className={`text-white ${className}`}
      style={{
        fontFamily: "MicroGrotesk",
        ...style,
      }}
    >
      {content}
    </div>
  );
};

export default MessageContent;
