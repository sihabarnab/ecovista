import LocationInfo from "@/components/LocationInfo";
const Page = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <LocationInfo lat={latitude} lon={longitude} />;
};

export default Page;
