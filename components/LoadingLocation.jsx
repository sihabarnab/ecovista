import Image from "next/image";

const LoadingLocation = () => (
  <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
    <Image
      src="/network.gif"
      alt="Loading...."
      width={200}
      height={200}
      className="border border-md my-4"
    />
    <p className="text-4xl text-center">Detecting Location....</p>
  </div>
);

export default LoadingLocation;
