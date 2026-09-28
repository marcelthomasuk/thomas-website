export type Story = {
  year: number;
  title: string;
  text?: string;
  image?: string;
  style?: Record<string, string | number>;
};
