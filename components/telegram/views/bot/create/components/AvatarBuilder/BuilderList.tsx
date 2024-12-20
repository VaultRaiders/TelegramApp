import { useState } from "react";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import BuilderListItem from "./BuilderListItem";
import BuilderSelect from "./BuilderSelect";

interface IBuilderListProps {
  items?: {
    key?: string;
    icon?: React.ReactNode;
    label?: string;
    options?: {
      value?: string;
      label?: string;
      photoUrl?: string;
    }[];
    defaultSelected?: string;
  }[];
  onSelect?: (_key: string, _value: IAvatarInfoItemData) => void;
}

const BuilderList = ({ items, onSelect }: IBuilderListProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="flex items-center gap-2 rounded-xl bg-neutral-800 px-1 text-primary">
        <FaCaretLeft />
        <div className="no-scrollbar flex items-center gap-3 overflow-x-auto">
          {items?.map((item, index) => (
            <BuilderListItem
              key={item.key}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              {...item}
            />
          ))}
        </div>
        <FaCaretRight />
      </div>

      {items?.map((item, index) => (
        <BuilderSelect
          key={item.key}
          title={item?.label}
          items={item?.options}
          hidden={activeIndex !== index}
          defaultSelected={item.defaultSelected}
          onSelect={(value) => onSelect?.(item.key, value)}
        />
      ))}
    </div>
  );
};

export default BuilderList;
