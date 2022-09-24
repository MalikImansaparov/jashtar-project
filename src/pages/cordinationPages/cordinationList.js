import React from 'react';
import {useFetch} from "../../api/useFetch";
import {base, councilUrl, uri, url} from "../../api/const";
import {useTranslation} from "react-i18next";


const CordinationList = () => {
    const {t, i18n} = useTranslation()
    const { isLoading, response } = useFetch(base + councilUrl + '/staff/');

    return (
        <div className='wrapper'>
            <div className='block text-base font-semibold mb-[36px]'>{t("listCoordination")}</div>
            <div className="flex items-center mb-[62px] flex-wrap">
                {response?.map(item => (
                    <div key={item.id} className="flex items-center w-[100%]">
                <div className="flex justify-center items-center shadow-org py-[13px] px-[30px] rounded-[12px] w-[291px] h-[86px] mr-[62px]">
                <img src={uri + item.id} alt='organization' className=''/>
                </div>
                <p className="font-normal text-base">{item.title_ky}</p>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default CordinationList;