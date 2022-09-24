import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import about from "../../assets/image/main/about.png"
import about2 from "../../assets/image/about/about2.png"
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, uri} from "../../api/const";
import DOMPurify from "dompurify";
import SanitizedHTML from "react-sanitized-html";
import {Sanitized} from "../../components/general/sanitize";
import sanitizeHtml from "sanitize-html";

export const JashtarProject = () => {
  const { isLoading, response } = useFetch(base + aboutUrl + '/youthpolicy/');



  return (
    <div className="w-full relative pb-[63px]">
      <div className="wrapper text-[16px] font-normal leading-5">
        <div className="">
          <BreadCrumb />
        </div>
        {response &&
          response.map((item) => (
            <div className="flex mb-8 w-full flex-wrap" key={item.id}>
                <div dangerouslySetInnerHTML={createMarkup(item.desc_ky)}></div>
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

