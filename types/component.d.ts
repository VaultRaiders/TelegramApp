interface IAvatarFieldProps {
  iconComponent?: React.ReactNode;
  label?: string;
  value?: IAvatarInfoItemData;
  onClick?: () => void;
}

interface ISelectionModalProps {
  open?: boolean;
  title?: string;
  options?: Array<IAvatarInfoItemData>;
  selectedOption?: IAvatarInfoItemData;
  containerRef?: React.MutableRefObject<HTMLDivElement>;
  disabled?: boolean;
  onSelect?: (_value?: IAvatarInfoItemData) => void;
  onClose?: () => void;
}

interface IBotCardProps extends IBotData {}
