
export default function NationalAnthem() {
  return (
    <div className="my-4">
        <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-4 py-2 text-white border-l-[4px] border-red-600 pl-3">
        জাতীয় সংগীত</h2>
        <div>
        <audio controls>
          <source src="your-audio-file.mp3" type="audio/mpeg" />
        </audio>
        </div>
    </div>
  )
}
