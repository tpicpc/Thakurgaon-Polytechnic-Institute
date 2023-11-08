import APA from "../Body/AllCatagory/APA";
import AcademicInformation from "../Body/AllCatagory/AcademicInformation";
import NationalIntrigrity from "../Body/AllCatagory/NationalIntrigrity";
import Services from "../Body/AllCatagory/Services";
import StudentAdmission from "../Body/AllCatagory/StudentAdmission";
import StudentCorner from "../Body/AllCatagory/StudentCorner";
import TeachersAndStaff from "../Body/AllCatagory/TeachersAndStaff";

export default function MainCategories() {
  return (
    <div className=" grid gap-5 md:grid-cols-2 mb-5">
        <AcademicInformation></AcademicInformation>
        <StudentCorner></StudentCorner>
        <TeachersAndStaff></TeachersAndStaff>
        <Services></Services>
        <APA></APA>
        <NationalIntrigrity></NationalIntrigrity>
        <StudentAdmission></StudentAdmission>
    </div>
  )
}
