import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import Card from "@/components/core/card";
import { DEFAULT_KID_IMAGE } from "@/constants";

interface ITemplateCardProps {
  id?: string;
  template?: IBotTemplateData;
}

const TemplateCard = ({ id, template }: ITemplateCardProps) => {
  return (
    <Card neon className="bg-neutral-800">
      <div className="relative flex w-full flex-col gap-4 overflow-hidden rounded-xl">
        <motion.div layoutId={`image-${template?.title}-${id}`}>
          <Image
            width={500}
            height={500}
            src={
              process.env.NEXT_PUBLIC_KID === "kid"
                ? DEFAULT_KID_IMAGE
                : template?.photo
            }
            alt={template?.title}
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col bg-gradient-to-t from-black/50 p-2 backdrop-blur-sm">
          {template?.title && (
            <motion.h3
              layoutId={`title-${template?.title}-${id}`}
              className="text-xl font-medium text-white md:text-left"
            >
              {template?.title}
            </motion.h3>
          )}
          {template?.description && (
            <motion.p
              layoutId={`description-${template?.description}-${id}`}
              className="text-sm md:text-left"
            >
              {template?.description}
            </motion.p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TemplateCard;
