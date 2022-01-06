import React from 'react';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleClick() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <nav className="bg-white shadow w-full">
                <div className="w-full px-6 py-3 mx-0 md:flex">
                    
                    <div className="flex flex-row justify-between">
                        <div>
                            <p className="text-2xl font-bold text-gray-800 w-40">UCSB AWM</p>
                        </div>
                        <div className="md:hidden my-auto">
                            <button type="button" className="text-slate-700 hover:text-slate-800 focus:outline-none focus:text-slate-800" aria-label="toggle menu" onClick={()=>this.handleClick()}>
                                <Hamburger/>
                            </button>
                        </div>
                    </div>
        
                    <div className={"flex flex-col px-2 my-auto -mx-4 md:flex-row md:mx-0 md:py-0 md:block " + (this.state.open ? "" : "hidden")}>
                        <NavButton href="#about">About</NavButton>
                        <NavButton href="#events">Events</NavButton>
                        <NavButton href="#Officers">Officers</NavButton>
                        <NavButton href="#contact">Contact</NavButton>
                    </div>
                </div>
            </nav>
        );
    }
}

const NavButton = ({href, children})=>(
    <a href={href} className="px-2 py-1 font-medium text-gray-700 rounded md:mx-2">
        {children}
    </a>
);

const Hamburger = ()=>(
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
    </svg>
);