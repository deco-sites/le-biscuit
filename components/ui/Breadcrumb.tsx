import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import type { BreadcrumbList } from "deco-sites/std/commerce/types.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Item({ name, item }: { name?: string; item?: string }) {
  if (!name || !item) {
    return null;
  }

  return (
    <li class="whitespace-nowrap overflow-hidden text-ellipsis  last-of-type:text-primary hover:text-primary">
      <a href={item} class="hover:underline">
        <span class="text-[12px] ">
          {name}
        </span>
      </a>
    </li>
  );
}

function Breadcrumb({ itemListElement = [] }: Props) {
  return (
    <ul class="flex flex-row gap-2 items-center w-full ">
      <Item name="Le Biscuit" item="/" />
      {itemListElement.map((item) => (
        <>
          <li class="mt-0.5">
            |
          </li>
          <Item {...item} />
        </>
      ))}
    </ul>
  );
}

export default Breadcrumb;
