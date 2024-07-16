import officialPdf from '../../assets/WebCv.pdf'

const about = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white dark:bg-slate-800 dark:text-white"
      >
        <div className="container md:w-[70%] sm:py-16 py-10">
          <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="relative font-bold">
              <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                ABOUT
              </div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                About me
              </h1>
            </div>
            <div className='text-slate-500'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                consequatur deleniti eius necessitatibus illo unde pariatur quos
                molestiae fugiat eaque.
              </p>{" "}
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ipsum, laborum corrupti vitae mollitia excepturi?
              </p>
              <div>
                <a
                  href={officialPdf}
                  className="primary-btn inline-block my-6 mr-6"
                >
                  Download Resume
                </a>
                <a href="tel:+2349034085463" className="outline-btn inline-block my-6 mr-6">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default about