import { useSignal } from "@preact/signals";
import { Product } from "deco-sites/std/commerce/types.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import Modal from "../ui/Modal.tsx";

interface Props {
  product: Product;
}

function PaymentTables(
  {
    product,
  }: Props,
) {
  const open = useSignal(false);
  const {
    price,
    listPrice,
    seller,
    installments,
    sellerName,
    installmentsLists,
  } = useOffer(
    product.offers,
  );

  // console.log(installmentsLists);

  return (
    <div class="flex w-full gap-2 ">
      <button onClick={() => open.value = true}>
        <span class="text-[12px] underline">Mais formas de pagamento</span>
      </button>
      <Modal
        mode="center"
        loading="lazy"
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        <div class="">
          {Object.keys(installmentsLists ?? {}).map((key) => (
            <input
              type="radio"
              id={`tab${key}`}
              name="css-tabs"
              class="hidden peer/one"
            />
          ))}

          <ul class="tabs flex w-full sm:justify-center overflow-x-auto gap-x-1">
            {Object.keys(installmentsLists ?? {}).map((key) => (
              <li class="tab p-[10px] border-b-[4px] border-default bg-gray-300 rounded">
                <label for={`tab${key}`} class="px-[24px] whitespace-nowrap">
                  {key}
                </label>
              </li>
            ))}
          </ul>
          {Object.entries(installmentsLists ?? {}).map(([_name, values]) => (
            <div class="tab-content hidden peer-checked/one:block">
              <ul>
                {values.map((entry) => (
                  <li class="flex even:bg-slate-200 ">
                    <span class="w-[25%]">{entry.billingDuration}x</span>
                    <span class="w-[25%]">de R$ {entry.billingIncrement}</span>
                    <span class="w-[25%]">s/ juros</span>
                    <span class="w-[25%]">R$ {entry.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div class="tab-content hidden peer-checked/two:block">
            pagamentos 2
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PaymentTables;
