import SideNav from "../dashboard/_components/SideNav"

function page() {
  return (
    <div>
      <div className='w-64 fixed hidden md:block'>
        <SideNav />
      </div>
      <div className=" flex flex-col text-sm md:text-lg font-bold self-center h-screen w-screen justify-center items-center ">
        <h1>Developer : </h1><img className=" rounded-lg" src="/in-my-opinion-maybe-this-is-something-we-can-work-on.gif" alt="" />
      </div>
    </div>
  )
}

export default page
