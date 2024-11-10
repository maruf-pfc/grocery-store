import { Button } from "@/components/ui/button";
import Slider from "./_components/Slider";
import globalAPI from "./_utils/globalAPI";

export default async function Home() {
  const sliderList = await globalAPI.getSliders();
  return (
    <div className="p-10 px-16">
      <Slider sliderList={sliderList}/>
    </div>
  );
}
