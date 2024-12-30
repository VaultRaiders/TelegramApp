"use client";

import { useMemo, useState } from "react";

import Image from "next/image";

import CoinAmount from "@/components/common/CoinAmount";
import DialogPassword from "@/components/common/DialogPassword";
import { GameButton } from "@/components/core/button";
import { Slider } from "@/components/core/slider";
import { useBotCreate } from "@/hooks/api/useBotCreate";
import { useUserWallet } from "@/hooks/api/useUserWallet";
import { useRouter } from "@/i18n/routing";
import { useCreateStore } from "@/store/create";

import AvatarPreview from "./components/AvatarPreview";

const CreatePaymentPage = () => {
  const router = useRouter();

  const { botData } = useCreateStore();

  const { data: walletData } = useUserWallet();
  const { mutateAsync: createBot } = useBotCreate();

  const [price, setPrice] = useState<number>(0);

  const [openDialogPassword, setOpenDialogPassword] = useState<boolean>(false);
  const [creating, setCreating] = useState<boolean>(false);

  const totalPrice = useMemo(() => {
    return `${price * 10000000000000000 + 10000000000000000}`;
  }, [price]);

  const handleCreateBot = async (password: string) => {
    if (creating) return;
    setCreating(true);

    const { message } = await createBot({
      initPrice: totalPrice,
      password,
      ...botData,
    });

    if (message === "success") {
      router.push("/?tab=3");
    } else {
      alert("Failed to create bot");
    }

    setCreating(false);
  };

  return (
    <div className="flex min-h-dvh flex-col overflow-hidden">
      <div className="mx-auto w-fit pt-8">
        <div className="flex">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent to-primary/50"></div>
          <div className="h-0.5 w-full bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 flex h-full w-full">
            <div className="h-full w-full bg-gradient-to-r from-transparent to-yellow-950/50"></div>
            <div className="h-full w-full bg-gradient-to-l from-transparent to-yellow-950/50"></div>
          </div>
          <div
            className="relative flex items-center justify-center gap-2 p-2 px-20 text-3xl text-primary"
            style={{
              fontFamily: "JimNightshade",
            }}
          >
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <div>CREATE BOT</div>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
          </div>
        </div>
        <div className="flex">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent to-primary/35"></div>
          <div className="h-0.5 w-full bg-gradient-to-l from-transparent to-primary/35"></div>
        </div>
      </div>

      <AvatarPreview />

      <div className="relative z-0 flex-grow pt-8">
        <div className="absolute left-0 right-0 top-0 -z-10">
          <Image
            src="/assets/bg-create-scroll.png"
            alt="Background"
            fill
            className="!static h-auto w-full object-contain"
          />
        </div>
        <div
          className="space-y-3 px-4 pb-28 text-[#544C41]"
          style={{
            backgroundImage: "url('/assets/bg-create-scroll-1.png')",
            backgroundSize: "495px 1051px",
            backgroundPositionX: "center",
          }}
        >
          <div style={{ fontFamily: "Luminari" }}>Payment Summary</div>

          <div className="space-y-4 rounded-xl bg-[#55432E]/20 p-4">
            <div>
              <div className="flex justify-between font-bold">
                Base Creation Fee
                <CoinAmount
                  amount={"10000000000000000"}
                  normalFont
                  className="text-base text-current"
                />
              </div>
              <div className="text-sm text-[#665D4F]">
                Base Fee for Bot Creation (0.01 ETH)
              </div>
            </div>

            {/* <div>
              <div className="flex justify-between font-bold">
                Instruction Length Fee
                <CoinAmount
                  amount={"570000000000000"}
                  normalFont
                  className="text-base text-current"
                />
              </div>
              <div className="text-sm text-[#665D4F]">
                System Prompt Length Fee ($0.01/words)
              </div>
            </div> */}

            <div>
              <div className="flex justify-between font-bold">
                Initial Pool Contribution
                <CoinAmount
                  amount={(price * 10000000000000000).toString()}
                  normalFont
                  className="text-base text-current"
                />
              </div>
              <div className="text-sm text-[#665D4F]">Tokens Added to Pool</div>
              <div className="mt-2">
                <Slider
                  min={0}
                  max={Math.floor(
                    +(walletData?.balance || 0) / 10000000000000000,
                  )}
                  value={[price]}
                  onValueChange={(value) => setPrice(value[0])}
                  className="relative flex w-full touch-none select-none items-center"
                />
                {/* <input
                  type="range"
                  min={0}
                  max={Math.floor(
                    +(walletData?.balance || 0) / 10000000000000000,
                  )}
                  value={price}
                  onChange={(e) => setPrice(+e.target.value)}
                  className="range range-xs [--range-shdw:#67451D]"
                /> */}
              </div>
            </div>

            <div className="border-b border-[#9C9082]" />

            <div className="flex justify-between font-bold">
              TOTAL
              <CoinAmount
                amount={totalPrice}
                normalFont
                className="text-base text-current"
              />
            </div>

            <div className="border-b border-[#9C9082]" />

            <div className="font-bold">
              <div>*After ~25 rounds, you break even.</div>
              <div>**The bot creator earns 10% of the total pool value.</div>
            </div>
          </div>

          <div className="space-y-2 rounded-xl bg-[#55432E]/20 p-4">
            <div className="text-center font-bold">Fallback condition</div>
            <div>
              <ul className="list-decimal pl-5">
                <li>Attacker Wins: Claim the bot&#39;s entire pool!</li>
                <li>12-Hour Timer: Resets with every new message.</li>
                <li>Timer Runs Out:</li>
                <li className="list-none pl-5">
                  <ul className="list-disc">
                    <li>Last message sender gets 20%.</li>
                    <li>80% is shared among all players.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed bottom-0 left-0 right-0 z-10 flex items-center justify-between whitespace-nowrap bg-gradient-to-t from-[#3C2E1C] to-[#745A3A] px-4 pb-5 pt-2.5"
        style={{
          fontFamily: "Luminari",
        }}
      >
        <div className="space-y-1 pt-4 text-xl">
          <div>Total payment</div>
          <CoinAmount amount={totalPrice} />
        </div>
        <GameButton
          disabled={creating}
          onClick={() => setOpenDialogPassword(true)}
          className="w-fit px-12"
        >
          {creating ? "Creating..." : "Create"}
        </GameButton>
      </div>

      <DialogPassword
        open={openDialogPassword}
        onOpenChange={setOpenDialogPassword}
        onConfirm={handleCreateBot}
      />
    </div>
  );
};

export default CreatePaymentPage;
