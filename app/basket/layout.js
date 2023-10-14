import TemaProvider from "@/app/providers/TemaProvider";

export const metadata = {
  title: "Basket Page | Muhammet ÇELİK",
  description: "Basket Page | Muhammet ÇELİK",
};

export default function BasketLayout({ children }) {
  return <TemaProvider>{children}</TemaProvider>;
}
