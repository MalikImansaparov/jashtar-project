import {React} from 'react';
import logo from "../../assets/image/main/logotip.png"
import {project} from "../statiic/data";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Quotes from "./Quotes";

const Header = () => {
    const {t} = useTranslation();

    return (
      <div className="bg-white font-inter">
        <div className="wrapper flex justify-between items-center sm:relative">
          <div className="flex">
            <NavLink to="/">
              <img
                className="w-[54px] h-[54px] my-[8px] mr-3 cursor-pointer md:w-[46px] md:h-[46px] md:mr-1 sm:ml-2 1xs:ml-0 1xs:w-[40px] 1xs:h-[40px] items-center"
                src={logo}
                alt="logo"
              />
            </NavLink>
            <div className="self-center">
              <p className="text-[11px] font-monserrat w-[284px] flex-wrap leading-[13px]">
                {t('main')}
              </p>
              <p className="text-sm font-semibold mt-1 text-blue leading-[14px]">
                {t('name')}
              </p>
            </div>
          </div>
          <div className="max-w-[400px] justify-center flex flex-wrap xl:max-w-[300px] 2lg:max-w-[250px] lg:hidden">
            {project.map((item) => (
              <div
                key={item.id}
                className="text-sm font-bold mx-[16px] underline cursor-pointer xl:mx-[14px] lg:mx-[8px]"
                onClick={() => window.open(item.url, '_blank')}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="w-[340px] sm:hidden">
            <Quotes />
          </div>
        </div>
      </div>
    );
};

export default Header;