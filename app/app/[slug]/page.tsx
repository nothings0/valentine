import { Get } from "@/api";
import HeartCanvas from "@/components/heart";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import valentine from "@/public/valentine.png";

async function GetData(slug: string) {
  return await Get(slug);
}

export default async function Page({ params }: { params: { slug: string } }) {
  // params.slug
  const data = await GetData(params.slug);

  return (
    <Dialog>
      <DialogTrigger>
        <HeartCanvas />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div>
            Chúc <span className="capitalize text-[#D46762]">{data.name}</span>{" "}
            valentine vui vẻ !!!
          </div>
        </DialogHeader>
        <div className="relative">
          <Image src={valentine} alt="valentine pic" priority />
          <p className="absolute w-[90%] top-[200px] left-1/2 -translate-x-1/2 text-[#D46762] text-lg text-center">
            {data.desc}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
