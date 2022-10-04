import React from 'react';
import {useFetch} from "../../api/useFetch";
import {base, councilUrl, uri, url} from "../../api/const";
import {useTranslation} from "react-i18next";
import {ClipLoader} from "react-spinners";

const CordinationList = () => {
    const {t, i18n} = useTranslation()
    const { isLoading, response } = useFetch(base + councilUrl + '/staff/');

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
        <div className='wrapper font-inter'>
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