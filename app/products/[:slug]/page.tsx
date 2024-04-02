import Image from "next/image";

import logo from "@/app/_assets/logo.webp";
import { Button } from "@/components/ui/button";

export default function ProductItemPage() {
  return (
    <div className="grid md:grid-cols-2 gap-4 place-content-center place-items-center container m-auto">
      <div className="flex flex-col gap-4">
        <Image src={logo} className="object-cover w-full" alt="Product Image" />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam
          animi iure.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          explicabo ad voluptas animi impedit facere sequi vel, illo tenetur
          distinctio porro, suscipit aut consequuntur excepturi. Explicabo, est
          aliquam delectus omnis odit molestiae voluptates voluptas provident
          optio! Cumque odit sunt optio molestias natus, eaque nam quaerat
          corporis earum consequuntur sed reprehenderit aliquid soluta tempore
          veritatis quos inventore doloremque quam cum. Assumenda,
          necessitatibus nisi iusto nihil repudiandae dolores perspiciatis id
          voluptate quia iure sed error distinctio cum explicabo molestiae?
          Quaerat ducimus quia vero. Eligendi ipsa pariatur veniam cum
          perferendis. Quidem deleniti eum ab rem eius, nulla iusto excepturi
          cum aut earum inventore?
        </p>
        <Button>ADD TO CART</Button>
      </div>
    </div>
  );
}
