import './App.css'

function App() {
  return (
    <div className="main w-[100%] h-[100%] bg-white ">
      <div className="nav flex flex-row items-center justify-between w-[100%] h-[70px] px-9">
        <div className="first flex flex-row m-2">
          <div className="">
            <button className="  px-4 rounded-3xl border-black border-2 ">
              Menu
            </button>
          </div>
          <div className="">
            <button className="  px-2  rounded-2xl  border-black border-2">
              <i className="ri-menu-3-line "></i>
            </button>
          </div>
        </div>
        <div className="second flex flex-row ">
          <div className="  text-[15px] uppercase">Dentytech</div>
          <div className=""></div>
        </div>
        <div className="third flex flex-row ">
          <div className="">
            <button className=" px-6 rounded-3xl border-black border-2">
              Log In
            </button>
          </div>
          <div className="">
            <button className=" px-6 rounded-3xl  bg-red-600 border-black border-2 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <h1 className=" flex absolute  top-[50%] left-[50%]  uppercase text-[100px] transform -translate-x-1/2 -translate-y-1/2  w-[100%]  font-bold justify-center">
        Our Advantages
      </h1>
      <img
        className=" absolute w-[220px] h-[320px] object-cover top-[50%] left-[50%] rounded-3xl  transform -translate-x-1/2 -translate-y-1/2 -rotate-[30deg]"
        src="https://images.unsplash.com/photo-1711637720126-693a567b4a1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <img
        className=" absolute w-[220px] h-[320px] object-cover top-[50%] left-[50%] rounded-3xl  transform -translate-x-1/2 -translate-y-1/2 -rotate-[20deg]"
        src="https://images.unsplash.com/photo-1711609605845-8b783ec432f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <img
        className=" absolute w-[220px] h-[320px] object-cover top-[50%] left-[50%] rounded-3xl  transform -translate-x-1/2 -translate-y-1/2 -rotate-[10deg]"
        src="https://images.unsplash.com/photo-1711384509415-cd7b16eb4bf1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <img
        className=" absolute w-[220px] h-[320px] object-cover top-[50%] left-[50%] rounded-3xl  transform -translate-x-1/2 -translate-y-1/2"
        src="https://images.unsplash.com/photo-1711368051128-53cd625db3be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="bottom absolute flex flex-row  justify-between bottom-[5%] left-[5%] w-[90%]">
        <div className="">
          <h5>Your Passion,Your Smile</h5>
        </div>
        <div className=" gap-1">
          <i className="ri-instagram-fill"></i>
          <i className="ri-facebook-circle-fill"></i>
          <p>Best Store Up of 2023</p>
        </div>
      </div>
    </div>
  )
}

export default App
