import Image from 'next/image'
export default function Custom404() {
  return (<section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
  {/* <Image className="absolute top-0 right-0 md:-mr-96 md:-mt-112" src="zospace-assets/lines/circle.svg" alt=""></Image>
  <Image className="absolute top-0 right-0 h-40 lg:h-80 lg:mr-64 lg:mt-24" src="zospace-assets/images/five-stars.svg" alt=""></Image>
  <Image className="hidden lg:block absolute top-0 left-0 h-64 -ml-10" src="zospace-assets/images/blue-double-circle.svg" alt=""></Image>
  <Image className="absolute bottom-0 left-0 h-80" src="zospace-assets/lines/half-double-circle.svg" alt=""></Image> */}
  <div className="relative container px-4 mx-auto">
    <div className="max-w-3xl mx-auto">
      <a className="inline-block text-white text-xl font-bold" href="#">
        <Image className="h-7" src="zospace-assets/logos/zospace-logo.svg" alt="" width="auto"></Image>
      </a>
      <Image className="mx-auto mb-8" src="zospace-assets/images/error-404.svg" alt=""></Image>
      <div className="max-w-md mx-auto text-center">
        <h2 className="mb-20 text-2xl text-white font-bold font-heading">Sorry, we can&apos;t find that page or something has gone wrong...</h2>
        <a className="inline-block px-12 py-4 text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200" href="#">Start again</a>
      </div>
    </div>
  </div>
</section>)
}