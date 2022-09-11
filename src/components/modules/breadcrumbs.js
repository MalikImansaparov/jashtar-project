import React from "react";
import {useNavigate} from "react-router";


export const BreadCrumbs = (props) => {
    const navigate = useNavigate()

    const isLast = (index) => {
        return index === props.crumbs.length - 1;
    };

    return (
        <div className='flex mb-8'>
            {props.crumbs.map((crumb, i) => {
                const actives = isLast(i) ? `actives` : '';
                return (
                    <div className='text-lg font-medium text-grey' key={i}>
                        <div onClick={() => navigate(-1)}  className={`${actives} mx-1.5`}>
                            {crumb}
                        </div>
                    </div>
                );
            })}
            <span className="ml-1.5">{props.title.split(' ').splice(0, 3).join(' ')+' ...'}</span>
        </div>
    );
};