import React from "react";
import {useNavigate} from "react-router";


export const BreadCrumbs = (props) => {
    const navigate = useNavigate()

    const isLast = (index) => {
        return index === props.crumbs.length - 1;
    };

    return (
        <div className='flex mb-8 font-inter'>
            {props.crumbs.map((crumb, i) => {
                return (
                    <div className='text-lg font-medium text-grey' key={i}>
                        <div onClick={() => navigate(-1)} className="mx-1.5 cursor-pointer">
                            {crumb}
                        </div>
                    </div>
                );
            })}
            <span className="ml-1.5 text-lg font-medium text-grey">{props.title.length > 20 ?
                props.title.split('').splice(0, 50) : props.title}
                {props.title.length > 25 && <span> ... </span>}</span>
        </div>
    );
};