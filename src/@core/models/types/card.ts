export interface CardProps {
  type: string;
  bgCard: string;
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