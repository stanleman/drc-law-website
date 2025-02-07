export default function Home() {
  return (
    <main className="bg-white">
      <div className="w-full mb-10 flex flex-col sm:flex-row justify-center lg:justify-between items-center px-10 sm:px-20 mt-10 gap-3 sm:gap-0">
        <div className="flex flex-col">
          <p className="text-[#BF8033] text-sm xxsm:text-base xsm:text-lg font-semibold">
            Philippine-based law firm
          </p>
          <h1 className="font-serif text-[20px] xxsm:text-[25px] xsm:text-[30px] sm:text-[20px] md:text-[30px] xl:text-[50px] text-nowrap">
            Justice. Integrity. Results.
          </h1>
        </div>

        <div className="pl-0 sm:pl-10 md:pl-20 xl:pl-40 xl:text-xl lg:text-lg md:text-base text-sm">
          Dela Rosa Casilla Law is a General Professional Partnership (GPP)
          located at the heart of Makati City, Philippines.
        </div>
      </div>

      <div className="relative w-full min-h-[80vh] bg-cover bg-center bg-[url(/lawfirm.jpg)]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute inset-0 flex items-center justify-center px-4 xsm:px-10 sm:px-20 md:px-32 lg:px-48">
          <div className="bg-[#1E2938] bg-opacity-90 text-white p-5 sm:p-10 ">
            <h2 className="text-sm md:text-base font-semibold text-[#BF8033]">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="mt-2 text-sm sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
              suscipit arcu. Fusce sit amet libero neque. Donec velit metus,
              vehicula non elit id, aliquet efficitur lectus.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
