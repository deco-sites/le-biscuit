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

  const creditCard = installmentsLists?.["American Express"];

  console.log(creditCard);

  return (
    <div class="flex w-full gap-2 relative">
      <button onClick={() => open.value = true}>
        <span class="text-[12px] underline">Mais formas de pagamento</span>
      </button>
      {
        /* <Modal
        mode="center"
        loading="lazy"
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      > */
      }
      <div
        class={`fixed inset-0 ${
          open.value == true ? "" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => open.value = false}
      >
      </div>
      <div
        class={`absolute top-5 w-full bg-white p-4 border rounded-md ${
          open.value == true ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        {creditCard && (
          <input
            type="radio"
            id={`tabCard`}
            name="css-tabs"
            class="hidden peer/card"
            checked
          />
        )}

        <ul class="tabs flex w-full gap-1 p-[5px]">
          {creditCard && (
            <li class="tab p-[10px] border-default bg-gray-300 rounded peer-checked/card:bg-primary">
              <label for={`tabCard`} class="whitespace-nowrap leading-none">
                Cartão de Credito
              </label>
            </li>
          )}
        </ul>
        {creditCard && (
          <div class="tab-content hidden peer-checked/card:block">
            <ul>
              {creditCard.map((entry) => (
                <li class="flex justify-between even:bg-gray-200 px-[5px]">
                  <span class="text-[14px]">{entry.billingDuration}x</span>
                  <span class="text-[14px]">
                    de R$ {entry.billingIncrement}
                  </span>
                  <span class="text-[14px]">s/ juros</span>
                  <span class="text-[14px]">R$ {entry.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* </Modal> */}
    </div>
  );
}

export default PaymentTables;
