import React from 'react';
import {BreadCrumb} from "../../../components/general/breadcrumb";
import './timeline.css'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {useFetch} from "../../../api/useFetch";
import {aboutUrl, base, twoLead, url} from "../../../api/const";
import {ClipLoader} from "react-spinners";
import path from "../../../assets/image/partners/Ellipse 2.png"

const TimeLine = () => {
    const { isLoading, response } = useFetch(base + aboutUrl + '/chronology/');
    console.log(response)

    if (isLoading) {
        return (
            <div role="status" className='flex justify-center mt-28 pb-24'>
                <ClipLoader
                    color="#1985A1"
                    size={300}
                />
            </div>
        )
    }

    return (
        <div className="pb-[104px]">
            <div className="wrapper">
                <BreadCrumb/>
            </div>
            <div className="w-[1236px] m-auto">
                <Tabs>
                    <TabList>
                        {
                            response?.map(item => (
                                <Tab key={item.id}>
                                    <p> {item.date}</p>
                                </Tab>
                            ))}
                    </TabList>
                    {/*{response?.map(item => (*/}
                        <TabPanel >
                            <div className='w-[867px] mx-[52px]'>
                            {/*<div className="flex">*/}
                            {/*    {response?.map(item => (*/}
                            {/*    <div className="flex w-[291px] mr-[106px] shadow-sm p-3 rounded-[12px]" key={item.id}>*/}
                            {/*    <img*/}
                            {/*        src={item}*/}
                            {/*        alt="cart-img"*/}
                            {/*        className="my-[14px] h-[62px] w-[62px] m-auto rounded-[50%]"*/}
                            {/*    />*/}
                            {/*    <div className="w-[193px] m-auto ">*/}
                            {/*        <p className="text-[12px] mb-1 fo t-normal text-blue">*/}
                            {/*         Жаманкулов Азамат Капарович*/}
                            {/*        </p>*/}
                            {/*        <p className="text-[11px] font-light">*/}
                            {/*            Министр культуры, информации, спорта и молодежной политики Кыргызской Республики*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*    </div>*/}
                            {/*    ))}*/}
                            {/*</div>*/}
                            {/*    {response && response.map(item => (*/}
                            {/*    <div className="" key={item.id}>*/}
                            {/*        <p className="text-base text-blue font-extrabold mt-[62px]">*/}
                            {/*            {item.title_ky}*/}
                            {/*        </p>*/}
                            {/*        <p className="text-base  font-normal my-[32px]">*/}
                            {/*            {item.desk_ky}*/}
                            {/*        <p className="text-base  font-normal my-[32px]">*/}
                            {/*            В 1996 году Государственный комитет Кыргызской Республики по туризму и спорту реорганизован в*/}
                            {/*            Министерство туризма и спорта Кыргызской Республики, которое в декабре этого же года*/}
                            {/*            реорганизовано в Государственное агентство по туризму и спорту при Правительстве Кыргызской*/}
                            {/*            Республики. В конце 2000 года ведомство реорганизовано в Государственный комитет Кыргызской Республики по туризму, спорту и молодежной политике.*/}
                            {/*        </p>*/}
                            {/*        <p className="text-base  font-normal my-[32px]">*/}
                            {/*            В 2005 году комитет реорганизован в Государственное агентство по физической культуре и спорту*/}
                            {/*            при Правительстве Кыргызской Республики, которое в 2007 году реорганизовано в Государственное*/}
                            {/*            агентство по физической культуре и спорту, делам молодежи и защите детей при Правительстве*/}
                            {/*            Кыргызской Республики. В 2009 году ведомство снова реорганизовано в Государственное агентство физической культуры и спорта при Правительстве Кыргызской Республики.*/}
                            {/*        </p>*/}
                            {/*        <p className="text-base font-normal mt-[32px]">*/}
                            {/*            В 2015 году образовано Государственное агентство по делам молодежи, физической культуры и*/}
                            {/*            спорта при Правительстве Кыргызской Республики на базе Государственного агентства физической*/}
                            {/*            культуры и спорта при Правительстве Кыргызской Республики, с передачей от преобразуемого*/}
                            {/*            Министерства труда, миграции и молодежи Кыргызской Республики функций по делам молодежи.*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*        ))}*/}
                            </div>
                        </TabPanel>
                    // ))}
                </Tabs>
            </div>
        </div>
    );
};

export default TimeLine;