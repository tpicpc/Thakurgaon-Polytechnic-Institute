import APA from "./APA";
import AcademicInformation from "./AcademicInformation";
import NationalIntrigrity from "./NationalIntrigrity";
import Services from "./Services";
import StudentAdmission from "./StudentAdmission";
import StudentCorner from "./StudentCorner";
import TeachersAndStaff from "./TeachersAndStaff";

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
