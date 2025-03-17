import Image from "next/image";

export default function Product({
  imgSrc,
  title,
  description,
  onclick,
}: {
  imgSrc: string;
  title: string;
  description: string;
  onclick: () => void;
}) {
  return (
    <div className="rounded-xl w-78 max-lg:w-60 mx-auto shadow shadow-black/50">
      <Image
        src={imgSrc}
        alt={"/"}
        width={300}
        height={190}
        className="rounded-t-xl w-full object-cover h-50"
      />

      <div className="bg-white px-6 py-4 flex flex-col gap-3 rounded-b-xl w-full text-left h-56 justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-primary-500 font-bold max-lg:text-sm">{title.toUpperCase()}</h2>

          <p className="text-sm max-lg:text-xs text-gray-400">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        </div>

        <button
          onClick={onclick}
          className="primary-btn py-2 px-4 rounded-md">
          Saber mais
        </button>
      </div>
    </div>
  );
}
