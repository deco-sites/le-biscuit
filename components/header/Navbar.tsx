import HeaderButton from "deco-sites/fashion/islands/HeaderButton.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useUI } from "../../sdk/useUI.ts";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import HeaderSearchMenu from "deco-sites/fashion/islands/HeaderSearchMenu.tsx";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";

function Navbar({ items, searchbar, image }: {
  items: INavItem[];
  searchbar: SearchbarProps;
  image: {
    desktop: LiveImage;
    mobile: LiveImage;
  };
}) {
  const { displaySearchbar } = useUI();
  const open = displaySearchbar.value;
  return (
    <>
      {/* Mobile Version */}
      <div class="md:hidden flex flex-col justify-between items-center w-full bg-white">
        <div class="md:hidden flex flex-row justify-between items-center w-full gap-2">
          <div class="!bg-[#ed1b2f] rounded-br-[30px] h-[54px] w-[66px] flex items-center justify-center">
            <HeaderButton variant="menu" />
          </div>

          <a
            href="/"
            class="flex-grow inline-flex items-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image src={image.mobile} alt="logo" width={114} height={21} />
          </a>

          <div class="flex gap-1">
            <HeaderButton variant="cart" />
          </div>
        </div>
        <div>
          <HeaderSearchMenu searchbar={searchbar} />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-3">
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <Icon id="Logo" width={126} height={16} />
          </a>
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex-none w-44 flex items-center justify-end gap-2">
          <HeaderButton variant="search" />
          <HeaderSearchMenu searchbar={searchbar} />
          <Button
            as="a"
            variant="icon"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
          </Button>
          <Button
            as="a"
            variant="icon"
            href="/wishlist"
            aria-label="Wishlist"
          >
            <Icon
              id="Heart"
              width={20}
              height={20}
              strokeWidth={2}
              fill="none"
            />
          </Button>
          <HeaderButton variant="cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
