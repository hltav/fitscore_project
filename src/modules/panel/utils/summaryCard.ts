type PaletteKey = "primary" | "success" | "info" | "warning" | "secondary";

export interface SummaryCard {
  title: string;
  value: number;
  color: PaletteKey;
}