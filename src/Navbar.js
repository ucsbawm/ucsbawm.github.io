import ucsb_banner from './ucsb_banner.jpg';

export default function Navbar(props) {
	return (
	<nav className="bg-no-repeat bg-top bg-cover lg:bg-[url('./ucsb_banner.jpg')] lg:min-h-[20rem]">
		<div className="p-6 mx-auto lg:flex lg:justify-between lg:items-center">
			<div className="flex items-center justify-between">
				<div>
					<p className="text-2xl font-bold text-gray-800 lg:text-3xl hover:text-gray-700">UCSB AWM</p>
				</div>
			</div>

			
			<div className="flex flex-col mt-4 space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0">
				<a className="text-gray-700 lg:px-6 hover:text-blue-500"
					href="#top">About</a>
				<a className="text-gray-700 lg:px-6 hover:text-blue-500"
					href="#">Events</a>
				<a className="text-gray-700 lg:px-6 hover:text-blue-500"
					href="#">Staff</a>
				<a className="text-gray-700 lg:px-6 hover:text-blue-500"
					href="#">FAQ</a>
				<a className="text-gray-700 lg:px-6 hover:text-blue-500"
				href="#">Contact</a>
			</div>
		</div>
		
	</nav>);
  }