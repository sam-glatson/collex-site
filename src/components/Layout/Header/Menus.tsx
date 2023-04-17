import React, { useState } from "react";

const Menus = () => {
    const [menu, setMenu] = useState(0);
    const handelMenu = (props: any) => {
        setMenu(props);
    };
    return (
        <div className="relative flex">
            <div className="w-[2px] bg-manatee-500 opacity-10"></div>

            <ul className="header-menu-list space-y-10">
                <li onClick={() => handelMenu(1)} className={`${menu == 1 ? " text-apache-500" : "text-manatee-500"}`}>
                    Home
                    {menu == 1 ? (
                        <div className="absolute -left-0.5 top-0 h-8 w-[2px] rounded-20 bg-apache-500"></div>
                    ) : null}
                </li>
                <li onClick={() => handelMenu(2)} className={`${menu == 2 ? " text-apache-500" : "text-manatee-500"}`}>
                    Services
                    {menu == 2 ? (
                        <div className="absolute -left-0.5 top-0 h-8 w-[2px] rounded-20 bg-apache-500"></div>
                    ) : null}
                </li>
                <li onClick={() => handelMenu(3)} className={`${menu == 3 ? " text-apache-500" : "text-manatee-500"}`}>
                    Case Studies
                    {menu == 3 ? (
                        <div className="absolute -left-0.5 top-0 h-8 w-[2px] rounded-20 bg-apache-500"></div>
                    ) : null}
                </li>
                <li onClick={() => handelMenu(4)} className={`${menu == 4 ? " text-apache-500" : "text-manatee-500"}`}>
                    Blog
                    {menu == 4 ? (
                        <div className="absolute -left-0.5 top-0 h-8 w-[2px] rounded-20 bg-apache-500"></div>
                    ) : null}
                </li>
                <li onClick={() => handelMenu(5)} className={`${menu == 5 ? " text-apache-500" : "text-manatee-500"}`}>
                    Contact
                    {menu == 5 ? (
                        <div className="absolute -left-0.5 bottom-0 h-8 w-[2px] rounded-20 bg-apache-500"></div>
                    ) : null}
                </li>
            </ul>
        </div>
    );
};

export default Menus;
