import { typeMapping } from "../constants/banner.constants";

// Función para normalizar el tipo a español
export const normalizeType = (type: any[]): string[] => {
  return type.map((t) => typeMapping[t.toLowerCase()] || t.toLowerCase());
};