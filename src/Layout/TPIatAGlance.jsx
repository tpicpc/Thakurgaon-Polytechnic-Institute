
export default function TPIatAGlance() {
    const style='border text-[13px] font-semibold border-slate-300 p-2'

  return (
    <div>
        <div>
            <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-4 py-2 text-white border-l-[4px] border-red-600 pl-3">এক নজরে ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউ</h2>

            <ul className="px-3 flex flex-col gap-1 text-justify text-[13px] font-semibold">
                <li><i className='bx bxs-chevrons-right'></i> দাপ্তরিক নাম: ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট</li>
                <li> <i className='bx bxs-chevrons-right'></i> প্রতিষ্ঠাকাল ২০০৪ সাল</li>
                <li> <i className='bx bxs-chevrons-right'></i> প্রশাসনিক নিয়ন্ত্রণ: কারিগরি ও মাদ্রাসা শিক্ষা বিভাগ, শিক্ষা মন্ত্রণালয়, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</li>
                <li> <i className='bx bxs-chevrons-right'></i> নিয়ন্ত্রণ কর্তৃপক্ষ: কারিগরি শিক্ষা অধিদপ্তর, আগারগাঁও, ঢাকা</li>
                <li> <i className='bx bxs-chevrons-right'></i> একাডমিক নিয়ন্ত্রণ: বাংলাদেশ কারিগরি শিক্ষা বোর্ড, আগারগাঁও, ঢাকা</li>
            </ul>

            <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] my-4 py-2 text-white border-l-[4px] border-red-600 pl-3">প্রকল্প সহায়ক সংস্থাসমূহ -</h2>
            <ul className="px-3 flex flex-col gap-1 text-justify text-[13px] font-semibold" >
                <li> <i className='bx bxs-chevrons-right'></i> STEP, কারিগরি শিক্ষা অধিদপ্তর, (বিশ্ব ব্যাংকের অর্থায়নে)</li>
                <li> <i className='bx bxs-chevrons-right'></i> B-SEP, আইএলও, ঢাকা (কানাডিয়ান সরকারের অর্থায়নে)</li>
            </ul>

            <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] my-4 py-2 text-white border-l-[4px] border-red-600 pl-3">প্রাতিষ্ঠানিক কাঠামো -</h2>
            <div className="md:flex py-3 w-full">
                <table className=" w-full ">
                    <tr>
                        <th className={`${style} text-[16px]`}>নাম</th>
                        <th className={`${style} text-[16px] w-24 md:w-44`}>পরিমাণ</th>
                    </tr>
                    <tr>
                        <td className={`${style}`}>জমির পরিমাণ</td>
                        <td className={`${style}`}>০২ একর</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>একাডেমিক ভবন</td>
                        <td className={`${style}`}>০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>প্রশাসনিক ভবন</td>
                        <td className={`${style}`}>০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>ওয়ার্কসপ ভবন</td>
                        <td className={`${style}`}>০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>লাইব্রেরী সংখ্যা</td>
                        <td className={`${style}`}>০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>বইয়ের সংখ্যা (পরিবর্তনশীল)</td>
                        <td className={`${style}`}>২৮০০ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>ল্যাবরেটরি/ওয়ার্কসপ সংখ্যা</td>
                        <td className={`${style}`}>১৭  টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>শিক্ষক সংখ্যা</td>
                        <td className={`${style}`}>১২ + ১৫ (স্টেপ) = ২৭ জন</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>কর্মচারীর সংখ্যা</td>
                        <td className={`${style}`}>৩০ জন</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>ক্লাসরুম সংখ্যা</td>
                        <td className={`${style}`}>১৬ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>জব প্লেসমেন্ট সেল</td>
                        <td className={`${style}`}>১ টি</td>
                    </tr>

                </table>


                <table className=" w-full ">
                    <tr>
                        <th className={`${style} text-[16px]`}>নাম</th>
                        <th className={`${style} text-[16px] w-24 md:w-44 `}>পরিমাণ</th>
                    </tr>
                    <tr>
                        <td className={`${style}`}>সেমিনার কক্ষ</td>
                        <td className={`${style}`}>	০২ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>শহীদ মিনার</td>
                        <td className={`${style}`}>	০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>	স্বাস্থ্য পরিচর্যা কেন্দ্র</td>
                        <td className={`${style}`}>	০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>	ছাত্রী কমনরুম</td>
                        <td className={`${style}`}>	০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>রোভার ডেন</td>
                        <td className={`${style}`}>	০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>মসজিদ</td>
                        <td className={`${style}`}>	০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>অনুষ্ঠান মঞ্চ</td>
                        <td className={`${style}`}>	০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>	অ্যাসেম্বলি মাঠ</td>
                        <td className={`${style}`}>	০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>	সাইকেল গ্যারেজ</td>
                        <td className={`${style}`}>	০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>	গাড়ির গ্যারেজ</td>
                        <td className={`${style}`}>	০১ টি</td>
                    </tr>
                    <tr>
                        <td className={`${style}`}>	সহশিক্ষা কেন্দ্র</td>
                        <td className={`${style}`}>	০১ টি</td>
                    </tr>

                </table>
            </div>
        </div>
    </div>
  )
}
