import {Link} from 'react-router-dom'
function Header({cart}){
    return(
        <div>
            <header className="bg-gray-200 flex justify-between items-center p-5  " >
                 <h1 className='text-2xl font-semibold'>Shopping</h1>
                <ul className='flex justify-between items-center gap-5 p-5 '>
                    <li className='font-semibold  hover:bg-gray-300 ring-1 p-2 rounded-xl hover:bg-gray-300'>
                        <Link to={"/" }>Home</Link>

                    </li >
                          <li  className='font-semibold  p-2 rounded-xl hover:bg-gray-300 ring-1'>
                        <Link to={"/cart" }>View Cart<span className='m-1 p-1  rounded-xl'>({cart.length})</span></Link>
                        
                    </li>
                </ul>
            </header>
               
        </div>
    )
}
export default Header;