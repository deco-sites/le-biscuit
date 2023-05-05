import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  image: LiveImage;
  path: string;
}

function Alert({ image, path }: Props) {
  return (
    <a href={path} class="hidden lg:block w-full group-[.micro]:hidden">
      <Image src={image} width={1430} height={80} class="w-full" />
    </a>
  );
}

export default Alert;
