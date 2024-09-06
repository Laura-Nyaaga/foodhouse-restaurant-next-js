const Navbar = () => {
    return(
        <main>
            <div className="flex justify-evenly gap-20 mt-5 pt-[10px] font-bold font-sans">
                <img src="/Images/logo.png" alt="" />
                <a className="text-yellow-500">HOME</a>
                <a className="text-slate-500">RESTURNT</a>
                <a className="text-slate-500">SERVICES</a>
                <a className="text-slate-500">CART</a>
                <p className="text-slate-500">Sign In</p>
            </div>
        </main>
    );
};
export default Navbar;