"use client";

import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams.toString());

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          params.set("latitude", position.coords.latitude);
          params.set("longitude", position.coords.longitude);
          setLoading(false);
          router.push(`/current?${params.toString()}`);
        },
        (error) => {
          setLoading(false);
          // Optional: Show error message to user
        }
      );
    } else {
      setLoading(false);
      // Optional: Show error message to user
    }
  }, [pathname, searchParams, router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
            src="/network.gif"
            alt="Loading...."
            width={500}
            height={500}
            className="border border-md my-4"
          />
          <p className="text-4xl text-center">Detecting Location....</p>
        </>
      )}
    </div>
  );
};

export default LocationDetector;
