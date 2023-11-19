import footerimg from '../../public/img/footer_top_bg.png'
export default function FooterImg() {
  return (
    <div className='px-3 lg:px-0'>
        <div>
             <img className='md:h-16  mb-10 lg:w-9/12 mx-auto md:w-full xl:w-9/12 ' src={footerimg} alt="footer-bg" />
        </div>
    </div>
  )
}
