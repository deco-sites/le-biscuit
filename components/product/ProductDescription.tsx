import Container from "../ui/Container.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import Text from "deco-sites/fashion/components/ui/Text.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function ProductDescription({ page }: Props) {
  if (!page) return null;

  const {
    product: { description },
  } = page;

  return (
    <div class="bg-gray-100">
      <Container class="py-0 sm:py-10">
        {/* Description*/}
        <div class="mt-4 sm:mt-6 " id="description">
          <Text variant="caption">
            {description && (
              <div>
                <h2 class="text-[20px] font-bold mb-[12px]">
                  Descrição do produto
                </h2>
                <div>
                  <span
                    class="text-[14px] leading-[25px] whitespace-break-spaces"
                    dangerouslySetInnerHTML={{ __html: description }}
                  >
                  </span>
                </div>
              </div>
            )}
          </Text>
        </div>
      </Container>
    </div>
  );
}

export default ProductDescription;
