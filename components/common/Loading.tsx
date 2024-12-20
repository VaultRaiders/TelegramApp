export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] flex flex-1 items-center justify-center backdrop-blur-lg">
      <span className="loading loading-infinity loading-lg text-primary"></span>
    </div>
  );
}
