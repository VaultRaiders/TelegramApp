"use client";

import Image from "next/image";

import { useCreateStore } from "@/store/create";
import Loader from "@/components/common/loading/ApiLoading";

const AvatarPreview = ({ loading }: { loading?: boolean }) => {
  const { botData } = useCreateStore();
  return (
    <div className="relative mx-auto my-4 aspect-[200/270] h-52">
      {!botData?.photoUrl && loading ? (
        <>
          <Image
            src={botData?.photoUrl || "/assets/bg-bot-create.png"}
            alt="Background"
            fill
            className="!static object-contain"
          />
          <div>
            <Loader width={20} height={20} />
          </div>
        </>
      ) : (
        <>
          <Image
            src={botData?.photoUrl || "/assets/avatar-bot-1.png"}
            alt="Background"
            fill
            className="!static"
          />
          <div
            className="absolute bottom-0 left-0 right-0 z-10 flex w-full flex-col gap-3 bg-gradient-to-t from-black/70 from-30% to-transparent p-3 pt-5 text-center text-xl uppercase text-primary"
            style={{
              fontFamily: "JimNightshade",
            }}
          >
            {botData?.displayName}
          </div>
        </>
      )}
    </div>
  );
};

export default AvatarPreview;
