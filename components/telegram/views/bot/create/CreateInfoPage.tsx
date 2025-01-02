"use client";

import { useState } from "react";

import Image from "next/image";

import PageHeading from "@/components/common/PageHeading";
import { GameButton } from "@/components/core/button";
import { Label } from "@/components/core/label";
import { RadioGroup, RadioGroupItem } from "@/components/core/radio";
import { Slider } from "@/components/core/slider";
import { useGenerateBotData } from "@/hooks/api/useGenerateBotData";
import { useRouter } from "@/i18n/routing";
import { useCreateStore } from "@/store/create";
import { useGenerateBotDataStore } from "@/store/generate";

const BotDescription = ({
  handleInput,
  value,
}: {
  handleInput: (_event: { target: any }) => void;
  value: string;
}) => {
  // Adjust height based on content
  const handleInputChange = (event: { target: any }) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height to fit content
    handleInput(event);
  };

  return (
    <div
      className="min-h-40 w-full rounded-[12px] p-4 text-center text-sm"
      style={{
        background: "rgba(101, 83, 63, 0.2)",
      }}
    >
      <div
        className="flex flex-col gap-1"
        style={{
          fontFamily: "MicroGrotesk",
        }}
      >
        <div>
          <div className="relative flex items-center justify-between pb-2">
            <div className="w-5"></div>
            <p
              className="grow font-light"
              style={{
                fontFamily: "MicroGrotesk500",
              }}
            >
              Introduce your bot*
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M16.5 3.38184V5.63184H15.75V6.38184H15V5.63184H14.25V4.88184H13.5V4.13184H12.75V3.38184H13.5V2.63184H15.75V3.38184H16.5Z"
                fill="#544C41"
              />
              <path
                d="M12.75 10.8818H13.5V16.1318H12.75V16.8818H1.5V16.1318H0.75V4.88184H1.5V4.13184H10.5V4.88184H9.75V5.63184H2.25V15.3818H12V11.6318H12.75V10.8818Z"
                fill="#544C41"
              />
              <path
                d="M13.5 6.38184H14.25V7.88184H13.5V8.63184H12.75V9.38184H12V10.1318H11.25V10.8818H10.5V11.6318H9.75V12.3818H9V13.1318H8.25V13.8818H5.25V10.8818H6V10.1318H6.75V9.38184H7.5V8.63184H8.25V7.88184H9V7.13184H9.75V6.38184H10.5V5.63184H11.25V4.88184H12.75V5.63184H13.5V6.38184Z"
                fill="#544C41"
              />
            </svg>
            {/* <Image
              src="/assets/info-circle.png"
              width={15}
              height={15}
              alt="Info Circle"
              className="absolute right-0 top-0 translate-y-1/4"
            /> */}
          </div>
          <textarea
            className="h-36 max-h-[400px] w-full resize-none bg-transparent outline-none placeholder:text-[#665D4F]"
            placeholder="Ex: A [goblin/wizard/master] with sharp green eyes and mysterious aura. Known for his quick wit and clever strategies. (Abilities) Specializes in time manipulation and can cast spells that slow or accelerate time during battles."
            onChange={handleInputChange}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

interface IAttributeData {
  style?: { direct?: number; evasive?: number; aggressive?: number };
  intelligent?: {
    analyzing?: number;
    negotiating?: number;
    weaknesses?: number;
  };
}

const CreateInfoPage = () => {
  const router = useRouter();

  const { botData, setBotData } = useCreateStore();
  const { setGenerateData } = useGenerateBotDataStore();
  const [introduction, setIntroduction] = useState();
  const [attributes, setAttributes] = useState<IAttributeData>({
    style: { direct: 45, evasive: 45, aggressive: 45 },
    intelligent: { analyzing: 45, negotiating: 45, weaknesses: 45 },
  });

  const handleDescriptionInput = (event: { target: any }) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height to fit content
    setIntroduction(textarea.value);
  };

  const { mutateAsync: generateBotData } = useGenerateBotData();
  const handleNext = async () => {
    if (!introduction) {
      alert("Please enter bot introduction");
      return;
    }

    try {
      const res = await generateBotData({
        ideas: introduction,
      });
      const data = res.data.data;
      setGenerateData(data);
      setBotData({
        ...botData,
        photoUrl: data.photoUrl,
        prompt: data.systemInstruction,
        bio: data.backStory,
        displayName: data.name,
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong please try again");
      return;
    }
    router.push("/create/prompt");
  };

  return (
    <div className="flex min-h-dvh flex-col overflow-hidden">
      <div className="mx-auto w-full pb-4 pt-6">
        <div className="relative flex items-center justify-center">
          <PageHeading title="create bot" />
        </div>
      </div>

      {/* <AvatarPreview loading={false} /> */}

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
          className="px-4 pb-28 text-[#544C41]"
          style={{
            backgroundImage: "url('/assets/bg-create-scroll-1.png')",
            backgroundSize: "495px 1051px",
            backgroundPositionX: "center",
          }}
        >
          <div className="space-y-4 px-3">
            <BotDescription
              handleInput={handleDescriptionInput}
              value={introduction}
            />

            <div className="space-y-4">
              <div>
                <div className="flex items-end justify-between">
                  <div style={{ fontFamily: "Luminari" }}>
                    Behavior Configs:
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <div className="font-bold">Sociability</div>
                </div>

                <div className="flex justify-between">
                  <div>Silent</div>
                  <div>Talkative</div>
                </div>

                <Slider min={0} max={100} step={1} defaultValue={[50]} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <div className="font-bold">Vocabulary Complexity</div>
                </div>

                <div className="flex justify-between">
                  <div>Simple</div>
                  <div>Sophisticated</div>
                </div>

                <Slider min={0} max={100} step={1} defaultValue={[50]} />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-end justify-between">
                  <div style={{ fontFamily: "Luminari" }}>Visual Configs:</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div className="font-bold">Alignment</div>
                  </div>

                  <RadioGroup defaultValue="light">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="r1" />
                      <Label htmlFor="r1">Light</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="neutral" id="r2" />
                      <Label htmlFor="r2">Neutral</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dark" id="r3" />
                      <Label htmlFor="r3">Dark</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div className="font-bold">Bot Form</div>
                  </div>

                  <RadioGroup defaultValue="Humanoid">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Humanoid" id="r1" />
                      <Label htmlFor="r1">Humanoid</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Beast" id="r2" />
                      <Label htmlFor="r2">Beast</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Spirit" id="r3" />
                      <Label htmlFor="r3">Spirit</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Construct" id="r2" />
                      <Label htmlFor="r2">Construct</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Artifact" id="r3" />
                      <Label htmlFor="r3">Artifact</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* <div className="space-y-4">
              <div>
                <div className="flex items-end justify-between">
                  <div style={{ fontFamily: "Luminari" }}>Reply Style</div>
                  <div className="text-sm">
                    {attributes?.style?.direct +
                      attributes?.style?.evasive +
                      attributes?.style?.aggressive}
                    /150%
                  </div>
                </div>
                <div className="text-sm">
                  Adjust the bot&#39;s tone and communication style.
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <div className="font-bold">Direct</div>
                  <div>{attributes?.style?.direct}%</div>
                </div>

                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={[attributes?.style?.direct]}
                  onValueChange={(value) => {
                    let newValue = Math.min(
                      value[0],
                      150 -
                        attributes?.style?.evasive -
                        attributes?.style?.aggressive,
                    );
                    setAttributes((prev) => ({
                      ...prev,
                      style: { ...prev.style, direct: newValue },
                    }));
                  }}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <div className="font-bold">Evasive</div>
                  <div>{attributes?.style?.evasive}%</div>
                </div>

                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={[attributes?.style?.evasive]}
                  onValueChange={(value) => {
                    let newValue = Math.min(
                      value[0],
                      150 -
                        attributes?.style?.direct -
                        attributes?.style?.aggressive,
                    );
                    setAttributes((prev) => ({
                      ...prev,
                      style: { ...prev.style, evasive: newValue },
                    }));
                  }}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <div className="font-bold">Aggressive</div>
                  <div>{attributes?.style?.aggressive}%</div>
                </div>

                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={[attributes?.style?.aggressive]}
                  onValueChange={(value) => {
                    let newValue = Math.min(
                      value[0],
                      150 -
                        attributes?.style?.direct -
                        attributes?.style?.evasive,
                    );
                    setAttributes((prev) => ({
                      ...prev,
                      style: { ...prev.style, aggressive: newValue },
                    }));
                  }}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-end justify-between">
                  <div style={{ fontFamily: "Luminari" }}>
                    Intelligent Abilities
                  </div>
                  <div className="text-sm">
                    {attributes?.intelligent?.analyzing +
                      attributes?.intelligent?.negotiating +
                      attributes?.intelligent?.weaknesses}
                    /150%
                  </div>
                </div>
                <div className="text-sm">
                  Define the bot&#39;s strengths and key skills.
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <div className="font-bold">Good at Analyzing</div>
                  <div>{attributes?.intelligent?.analyzing}%</div>
                </div>

                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={[attributes?.intelligent?.analyzing]}
                  onValueChange={(value) => {
                    let newValue = Math.min(
                      value[0],
                      150 -
                        attributes?.intelligent?.negotiating -
                        attributes?.intelligent?.weaknesses,
                    );
                    setAttributes((prev) => ({
                      ...prev,
                      intelligent: { ...prev.intelligent, analyzing: newValue },
                    }));
                  }}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <div className="font-bold">Good at Negotiating</div>
                  <div>{attributes?.intelligent?.negotiating}%</div>
                </div>

                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={[attributes?.intelligent?.negotiating]}
                  onValueChange={(value) => {
                    let newValue = Math.min(
                      value[0],
                      150 -
                        attributes?.intelligent?.analyzing -
                        attributes?.intelligent?.weaknesses,
                    );
                    setAttributes((prev) => ({
                      ...prev,
                      intelligent: {
                        ...prev.intelligent,
                        negotiating: newValue,
                      },
                    }));
                  }}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <div className="font-bold">
                    Good at Pointing Out Weaknesses
                  </div>
                  <div>{attributes?.intelligent?.weaknesses}%</div>
                </div>

                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={[attributes?.intelligent?.weaknesses]}
                  onValueChange={(value) => {
                    let newValue = Math.min(
                      value[0],
                      150 -
                        attributes?.intelligent?.analyzing -
                        attributes?.intelligent?.negotiating,
                    );
                    setAttributes((prev) => ({
                      ...prev,
                      intelligent: {
                        ...prev.intelligent,
                        weaknesses: newValue,
                      },
                    }));
                  }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div
        className="fixed bottom-0 left-0 right-0 z-10 space-y-3 bg-gradient-to-t from-[#3C2E1C] to-[#745A3A] px-4 pb-5 pt-2.5"
        style={{
          fontFamily: "Luminari",
        }}
      >
        <GameButton onClick={handleNext}>Next</GameButton>
      </div>
    </div>
  );
};

export default CreateInfoPage;
