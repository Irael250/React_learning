
function Title(){

    return(

        <>

        <nav className="w-100 h-16 bg-purple-900">
            <div className=" absolute top-1 right-10 ">
          <ul className="flex gap-6  mx-10 ml-100" >
            <li className=" mt-4 bg-blue-800  p-1 rounded-lg hover:bg-purple-900 text-yellow-400"><a  className="text-gray-100" href="#">Home</a> </li>
            <li className=" mt-4 bg-blue-800  p-1 rounded-lg hover:bg-purple-900 text-yellow-400"> <a className="text-gray-100" href="#">About</a> </li>
            <li className=" mt-4 bg-blue-800  p-1 rounded-lg hover:bg-purple-900 text-yellow-400" ><a className="text-gray-100" href="#">Contact us</a> </li>
            <li className=" mt-4 bg-blue-800  p-1 rounded-lg hover:bg-purple-900 text-yellow-400"> <a className="text-gray-100" href="#">Log out</a> </li>
          </ul>
          </div>
          </nav>

        </>
    );

}

export default Title