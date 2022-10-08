import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import bg from "../../assets/image/about/jashtar-bg.png";
import {useFetch} from "../../api/useFetch";
import {aboutUrl, base, lead, uri} from "../../api/const";
import {Sanitized} from "../../components/general/sanitize";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";
import {createMarkup} from "../../components/general/dompurify";

const Ministry = () => {
    const {i18n} = useTranslation()
    const { isLoading, response } = useFetch(base + aboutUrl + '/ministry/');

    // const bgImageStyle = {
    //     backgroundImage: `url('${bg}')`,
    //     // backgroundImage: `url('${uri + response.map(i => i.background_image)}')`,
    //     backgroundSize: 'cover'
    // }

    if (isLoading) {
        return (
            <div role="status" className='flex justify-center my-28 pb-24'>
                <ClipLoader
                    color="#1985A1"
                    size={300}
                />
            </div>
        )
    }

    return (
        <>
            {response && response.map(item => (
        <div className="w-full h-[604px] relative z-0 pb-8 font-inter" key={item.id} style="background-image: url('https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png');">
            <div className="absolute top-0 left-0 bg-gradient-ministry w-full h-[624px] z-0" ></div>
                <div className='container w-[1196px] m-auto text-white text-base font-normal' key={item.id}>
                    <div className="text-white">
                        <BreadCrumb/>
                    </div>
                    <p className="my-16 leading-[19.3px] relative z-10 text-justify">
                        {i18n.language === "ky" &&
                            <Sanitized html={item.desc_ky}/>
                        }
                        {i18n.language === "ru" &&
                            <Sanitized html={item.desc_ru}/>
                        }
                        {i18n.language === "en" &&
                            <Sanitized html={item.desc_en}/>
                        }
                    </p>
                </div>
        </div>
            ))}
            </>
    );
};

export default Ministry;