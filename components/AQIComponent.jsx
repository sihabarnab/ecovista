import { getAQIData } from "@/lib/weather-info";
import Card from "./Card";
const AQIComponent = async ({ lat, lon }) => {
  const { main, components } = await getAQIData(lat, lon);
  console.log("AQI Data:", main, components);
  return <Card>AQIComponent</Card>;
};

export default AQIComponent;
