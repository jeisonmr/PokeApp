export interface CardProps {
  type: string;
  bgCard: string;
  bgCardInternal?: string;
  textColor?: string;
  numberColor?: string;
  border: {
    borderColor: string;
    hoverBorderColor: string;
  };
  icon?: string;
  tag?: {
    bgTag: string;
  };
  colorBar?: string;
}