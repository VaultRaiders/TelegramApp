"use client";

import { useEffect, useId, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import CloseIcon from "@/components/common/CloseIcon";
import Button from "@/components/core/button";
import { DEFAULT_KID_IMAGE } from "@/constants";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useRouter } from "@/i18n/routing";
import { IBotCreateData } from "@/store/bot";

import TemplateCard from "./TemplateCard";
import { botTemplates } from "../../data/templates";

const ListTemplate = () => {
  const t = useTranslations("Telegram.Create.Templates");

  const { push } = useRouter();
  const [active, setActive] = useState<IBotTemplateData | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const handleNext = async () => {
    const data: IBotCreateData = {
      id: typeof active === "object" ? active.id : null,
      idea: input,
      photoUrl: typeof active === "object" ? active.photo : "",
      photoConfig:
        typeof active === "object"
          ? {
              prompts: active?.photo_prompt || [],
              style: active?.photo_style,
            }
          : {},
    };
    document.body.style.overflow = "auto";
    localStorage.removeItem("botCreateData");
    localStorage.removeItem("avatarInfo");
    localStorage.setItem("botCreateData", JSON.stringify(data));
    push(`/create/custom`);
  };

  const [templates, setTemplates] = useState<IBotTemplateData[]>([]);

  const getListTemplates = async (page = 1) => {
    setIsFetching(true);
    try {
      const listTemplates = botTemplates;

      if (page === 1) {
        setTemplates(listTemplates);
      } else {
        setTemplates((prevTemplates) => [...prevTemplates, ...listTemplates]);
      }
    } catch (error) {
      console.log(error);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    getListTemplates();
  }, []);

  return (
    <>
      <motion.button
        className="btn btn-primary w-full text-white"
        key={"custom"}
        onClick={() => {
          setInput("");
          setActive({
            id: "custom",
            title: "Custom",
            description: "",
            idea: "",
            photo: "",
            photo_prompt: [],
            photo_style: "",
          });
        }}
      >
        Create with your idea
      </motion.button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-base-100 px-4">Or choose a template</span>
        </div>
      </div>
      <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {!isFetching
          ? templates.map((template) => (
              <motion.div
                layoutId={`card-${template.title}-${id}`}
                key={template.title}
                onClick={() => {
                  setInput(template.idea);
                  setActive(template);
                }}
              >
                <TemplateCard id={id} template={template} />
              </motion.div>
            ))
          : Array.from(Array(4).keys()).map((i) => (
              <div className="skeleton h-32 w-full" key={i.toString()}></div>
            ))}
      </ul>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-2 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-dvh w-full max-w-[500px] flex-col overflow-hidden bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                {active.photo && (
                  <Image
                    priority
                    width={500}
                    height={500}
                    src={
                      process.env.NEXT_PUBLIC_KID === "kid"
                        ? DEFAULT_KID_IMAGE
                        : active.photo
                    }
                    alt={active.title}
                    className="h-72 w-full object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80"
                  />
                )}
              </motion.div>

              <div className="flex-grow space-y-4 overflow-y-auto p-4 pb-0">
                <div className="flex items-start justify-between">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-xl font-medium text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="relative flex flex-col gap-2">
                  <motion.h3 className="text-sm">
                    {t(
                      "Share your ideas, and we'll bring your perfect fantasy girlfriend to life",
                    )}
                  </motion.h3>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-start gap-4 overflow-auto pb-4 text-xs text-neutral-400 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base"
                  >
                    <textarea
                      rows={4}
                      placeholder={t("write-idea-placeholder")}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="textarea textarea-bordered w-full text-white"
                    />
                  </motion.div>
                </div>
              </div>

              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-4"
              >
                <Button neon onClick={handleNext}>
                  {t("Create now")}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default ListTemplate;
