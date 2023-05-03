import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["div"];

function Container({ class: _class = "", ...props }: Props) {
  return <div class={`sm:max-w-[1280px] mx-auto overflow-x-hidden ${_class}`} {...props} />;
}

export default Container;
