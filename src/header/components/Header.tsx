import { Logo } from "~/header/components";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 p-6 md:p-10 lg:p-16">
      <Logo />
    </header>
  );
};
