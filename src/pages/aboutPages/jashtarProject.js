import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, uri} from "../../api/const";
import {createMarkup} from "../../components/general/dompurify";
import {useTranslation} from "react-i18next";

export const JashtarProject = () => {
  const { isLoading, response } = useFetch(base + aboutUrl + '/youthpolicy/');
  const {i18n} = useTranslation()

  return (
    <div className="w-full relative pb-[63px]">
      <div className="wrapper text-[16px] font-normal leading-5">
        <div className="">
          <BreadCrumb />
        </div>
        {response &&
          response.map((item) => (
            <div className="flex mb-8 w-full flex-wrap" key={item.id}>
                {i18n.language === "ky" &&
                    <div dangerouslySetInnerHTML={createMarkup(item.desc_ky)}></div>
                }
                {i18n.language === "ru" &&
                    <div dangerouslySetInnerHTML={createMarkup(item.desc_ru)}></div>
                }
                {i18n.language === "en" &&
                    <div dangerouslySetInnerHTML={createMarkup(item.desc_en)}></div>
                }
            </div>
          ))}
      </div>
    </div>
  );
};

{
  /*<img src={about} className='h-[287px] w-[about432px] mr-[62px] z-10' alt='about'/>*/
}
{
  /*<div className="flex flex-wrap">*/
}
{
  /*  */
}
{
  /*</div>*/
}
{
  /*<img src={about2} className='h-[287px] w-[432px] mr-[62px] mt-[32px] pl-[62px] z-10 bg' alt='about'/>*/
}

