export interface CardProps {
  type: string;
  bgCard: string;
  border: {
    borderColor: string;
    hoverBorderColor: string;
  };
  icon?: string;
  tag?: {
    icon: string;
    bgTag: string;
  };
}