import TemperatureComponent from "@/components/TemperatureComponent";
const TemperaturerPage = ({
  params: { location },
  searchParams: { latitude, longitude },
})  => {
  return (
    <TemperatureComponent lat={latitude} lon={longitude} />
  );
};

export default TemperaturerPage;
