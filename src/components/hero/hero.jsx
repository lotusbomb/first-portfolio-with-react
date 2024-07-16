import personImg from "../../assets/photo2.jpg"

const hero = () => {
  return (
    <>
      <main className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-l sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-[600px]">
          <div>
            <div className="space-y-2 grid justify-items-center sm:justify-items-start leading-loose">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I am Onyinyechi Favour
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Front End Web Developer
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda fugiat neque beatae reiciendis, ipsam fuga
                voluptatibus tenetur ullam. Exercitationem deserunt dignissimos
                veritatis doloremque id quia?
              </p>
              <a
                href="chukwumafavour600@gmail.com"
                className="inline-block primary-btn !px-6"
              >
                Hire me
              </a>
            </div>
          </div>

          {/*image container*/}
          <div>
            <img
              src={personImg} alt="Not found" className="w-full md:max-w-lg mx-auto"
            />
          </div>
        </div>
      </main>
    </>
  );
  
}

export default hero