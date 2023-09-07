import Typewriter from "typewriter-effect"

export default function TypeWriter() {
  return (
    <div className='my-20 max-w-7xl justify-center text-center mx-auto place-items-center flex-col text-5xl sm:text-8xl font-bold '>
      <h2>
        I am Raunak Gurud
      </h2>
      <div>
        <p className='inline-block mr-2 text-4xl gradient-underline gradient-underline:hover'>I work on</p>
        <p className=" inline-block font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          onClick={() => console.log('value')}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Frontend")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Backend")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Fullstack")
                .pause()
                .start()
            }}
          />
        </p>
      </div>
    </div>
  )
}
