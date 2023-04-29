import Image from "deco-sites/std/components/Image.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Avatar from "deco-sites/fashion/components/ui/Avatar.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import WishlistIcon from "deco-sites/fashion/islands/WishlistButton.tsx";
import { useOffer } from "deco-sites/fashion/sdk/useOffer.ts";
import { formatPrice } from "deco-sites/fashion/sdk/format.ts";
import { useVariantPossibilities } from "deco-sites/fashion/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import ButtonSendEvent from "deco-sites/fashion/components/ButtonSendEvent.tsx";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";

/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */
function Sizes(product: Product) {
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  );

  return (
    <ul class="flex justify-center items-center gap-2">
      {options.map(([value, urls]) => {
        const url = urls.find((url) => url === product.url) || urls[0];

        return (
          <a href={url}>
            <Avatar
              variant="abbreviation"
              content={value}
              disabled={url === product.url}
            />
          </a>
        );
      })}
    </ul>
  );
}

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;

  /** @description used for analytics event */
  itemListName?: string;
}

function ProductCard({ product, preload, itemListName }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
    isVariantOf,
  } = product;
  const [front, back] = images ?? [];
  const { listPrice, price, seller } = useOffer(offers);

  return (
    <div
      data-deco="view-product"
      id={`product-card-${productID}`}
      class="flex-col w-[240px] h-[430px] relative py-5 content-center text-start rounded-lg border border-camp-grey group"
    >
      <a href={url} aria-label="product link">
        <div class="flex h-[200px]  justify-center">
          <div class="absolute top-0 right-0">
            <WishlistIcon
              productId={isVariantOf?.productGroupID}
              sku={productID}
              title={name}
            />
          </div>
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={200}
            height={200}
            class="rounded w-full mb-1 "
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />

          <div
            class="absolute bottom-0 hidden sm:group-hover:flex flex-col gap-2 w-full p-2 bg-opacity-10"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(2px)",
            }}
          >
            <Sizes {...product} />
            {/* FIXME: Understand why fresh breaks rendering this component */}
            <ButtonSendEvent
              as="a"
              href={product.url}
              event={{
                name: "select_item",
                params: {
                  item_list_name: itemListName,
                  items: [
                    mapProductToAnalyticsItem({
                      product,
                      price,
                      listPrice,
                    }),
                  ],
                },
              }}
            >
              Adicionar à sacola
            </ButtonSendEvent>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center gap-1 py-2 ">
          <Text
            class="overflow-hidden text-ellipsis whitespace-break-spaces text-xs  "
            variant="caption"
          >
            {name}
          </Text>
          <div class="bg-white h-[40px] w-full">
          </div>

          <div class="flex justify-around items-center gap-2 w-full">
            <Text class="line-through" variant="list-price" tone="base-300">
              {formatPrice(listPrice, offers!.priceCurrency!)}
            </Text>
            <div class="flex flex-row gap-[2px] justify-center items-center bg-camp-grey text-blue-text-discount text-xs h-[30px] w-[50px] rounded-[4px]">
              <Icon id="ArrowDown" width={10} height={10} strokeWidth={2} />
              <span class="">%16</span>
            </div>
          </div>
          <div class="flex flex-col w-full p-2">
            <span class="text-[18px]">
              {formatPrice(price, offers!.priceCurrency!)}
            </span>
            {/* a verificar */}
            <span class="text-[12px]">
              12x {formatPrice(price! / 12, offers!.priceCurrency!)}{" "}
              s/ juros no cartão de crédito
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
