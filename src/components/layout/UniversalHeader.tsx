'use client'
import React from "react";

// @ts-ignore
const UniversalHeader = (props) => {
    return (
        <div className="navbar bg-base-100" data-theme={props.theme}>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Home</a>
                <a className="btn btn-ghost normal-case text-xl">Tests</a>
                <a className="btn btn-ghost normal-case text-xl">Games</a>
                <a className="btn btn-ghost normal-case text-xl">About</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="btn btn-ghost normal-case text-xl">Writer</a></li>
                    <li>
                        <details>
                            <summary className="btn btn-ghost normal-case text-xl">
                                More
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a>Log in</a></li>
                                <li><a>Register</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default UniversalHeader;