import MainCategories from "./MainCategories";
import Introduction from "../Body/Introduction";
import Notice from "../Body/Notice";
import OurVision from "../Body/OurVision";
import UpdateNews from "../Body/UpdateNews";

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
