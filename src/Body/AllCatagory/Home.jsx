import MainCategories from "./MainCategories";
import Introduction from "../Introduction";
import Notice from "../Notice";
import OurVision from "../OurVision";
import UpdateNews from "../UpdateNews";

export default function Home() {
  return (
    <div>
            <Notice></Notice>
            <UpdateNews></UpdateNews>
            <OurVision></OurVision>
            <Introduction></Introduction>
            <MainCategories></MainCategories>
    </div>
  )
}
