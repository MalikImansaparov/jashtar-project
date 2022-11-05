import React, { useState } from 'react';
import arr from '../../assets/image/general/menus.svg';
import arr2 from '../../assets/image/main/arrow-rigth.png';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../src/components/general/menu';

const AboutDrop = () => {
  const [show, setShow] = useState(false);
  const toggleAccordion = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="flex items-center" active={show ? show : false}>
        <div className="menu-list">{t('about')}</div>
        <div onClick={toggleAccordion}>
          {show ? (
            <img src={arr} className="mr-[5px]" alt="lang" />
          ) : (
            <img src={arr2} className="mr-[5px]" alt="lang" />
          )}
        </div>
      </div>
      {show && (
        <div className="pl-4" onClick={toggleMenu}>
          <Link to="/valuation" className="menu-list mt-[5px]">
            {t('valuation')}
          </Link>
          <Link to="/management" className="menu-list">
            {t('leadship')}
          </Link>
          <Link to="/timeline" className="menu-list">
            {t('timeline')}
          </Link>
          <Link to="/ministry" className="menu-list">
            {t('ministry')}
          </Link>
          <Link to="/policy" className="menu-list">
            {t('politics')}
          </Link>
          <Link to="/projects" className="menu-list">
            {t('projects')}
          </Link>
          <Link to="/contacts" className="menu-list">
            {t('contacts')}
          </Link>
        </div>
      )}
    </>
  );
};

export default AboutDrop;
