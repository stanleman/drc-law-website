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
            <h2 className="text-sm md:text-lg font-semibold text-[#BF8033]">
              What do we do?
            </h2>
            <p className="mt-2 text-sm sm:text-base lg:text-xl">
              Dela Rola Casilla provides legal services to commited clients with
              an optimistic voice.
            </p>

            <button className="bg-[#BF8033] px-5 py-3 mt-5">
              Book a consultation
            </button>
          </div>
        </div>
      </div>

      <div
        className="px-10  xsm:px-10 sm:px-28 md:px-40 lg:px-64 xl:px-80 pt-24 flex flex-col items-center text-start"
        id="about"
      >
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-5 md:mb-7 lg:mb-10 w-full">
          The <span className="text-[#BF8033]">Dela Rosa Casilla</span> Story
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-7 lg:mb-10">
          Founded in July 2019, Dela Rosa Casilla Law was established by Atty.
          Bryan Lloyd L. Dela Rosa and Atty. Paul Vincent M. Casilla with a
          shared vision of delivering exceptional legal services with integrity
          and expertise.
        </p>

        <p className="text-sm sm:text-base md:text-lg mb-7 lg:mb-10">
          Atty. Bryan Lloyd L. Dela Rosa serves as the firm's Managing Partner.
          With extensive experience in general litigation, he has successfully
          handled cases involving criminal defense, labor relations, and
          election disputes. His expertise extends to the Court of Tax Appeals
          (CTA), where he has represented clients in tax assessments and
          refunds, ensuring compliance and favorable outcomes.
        </p>

        <p className="text-sm sm:text-base md:text-lg mb-7 lg:mb-10">
          Atty. Paul Vincent M. Casilla, the Head of Corporate and Tax
          Department, brings a wealth of experience in corporate law, taxation,
          and labor relations. His deep understanding of incorporation
          proceedings, tax audits, and assessments before Philippine tax
          authorities has helped numerous businesses navigate legal
          complexities. Atty. Casilla is also a Certified Public Accountant
          (CPA) and a college professor, further enriching his legal practice
          with financial and academic insight.
        </p>

        <p className="text-sm sm:text-base md:text-lg mb-10 md:mb-16 lg:mb-24">
          At Dela Rosa Casilla Law, we believe in providing personalized,
          results-driven legal services in a family-oriented and client-focused
          environment. Our firm is built on trust, excellence, and dedication,
          ensuring that every client feels valued and empowered on their legal
          journey. Whether you seek guidance in litigation, corporate law,
          taxation, or labor relations, we are committed to helping you achieve
          justice with an optimistic and principled approach.
        </p>
      </div>
    </main>
  );
}
