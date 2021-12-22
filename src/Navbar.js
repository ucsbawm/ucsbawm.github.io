import ucsb_banner from './media/ucsb_banner.jpg';

export default function Navbar(props) {
	return (
		<nav className="bg-white shadow">
        <div className="container px-6 py-3 mx-auto md:flex">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-2xl font-bold text-gray-800 w-40">UCSB AWM</p>
                </div>
            </div>

            <div className="w-full md:flex md:items-center md:justify-between">
                <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                    <a href="#about" className="px-2 py-1 font-medium text-gray-700 rounded md:mx-2">About</a>
					<a href="#events" className="px-2 py-1 font-medium text-gray-700 rounded md:mx-2">Events</a>
					<a href="#staff" className="px-2 py-1 font-medium text-gray-700 rounded md:mx-2">Staff</a>
					<a href="#contact" className="px-2 py-1 font-medium text-gray-700 rounded md:mx-2">Contact</a>
                </div>
            </div>
        </div>
    </nav>);
}
