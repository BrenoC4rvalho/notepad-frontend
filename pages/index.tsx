import Header from "../components/Header"

const Home = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header islogged={false} />

      <main className="flex justify-center ">
          
          <div className="flex flex-col items-center w-2/5 mb-">
            <h2 className="text-8xl font-medium text-cyan-700">Welcome</h2>
            <p className="text-center text-3xl text-cyan-600 mt-5 ">
              Have you thought of a single place for you to store your ideas, notes and more. So here is this place, 
              you can access it anytime and anywhere.
            </p>
          </div>

      </main>

      <footer className="text-center mb-4">
        <p> Created by Breno </p>
      </footer>

    </div>
  )
}

export default Home
