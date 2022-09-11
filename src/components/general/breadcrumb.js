import {useLocation, useParams, } from "react-router-dom";
import {useNavigate} from "react-router";
import arrow from "../../assets/image/general/arr.svg"
import arrow2  from "../../assets/image/general/arr2.svg"

export const BreadCrumb = () => {
    const location = useLocation();
    const id = useParams()
    const navigate = useNavigate()
    const {pathname} = location

    return (
        <div className='pt-[62px] mb-8'>
            {pathname && (
                <>
                <div className='text-lg font-medium text-grey'>
                    {pathname === '/valuation' ? <span className="crumbs" onClick={() => navigate(-1)}>О нас<img src={arrow} alt="" className="mx-4 w-2 h-4"/> Ценности</span> : null}
                    {pathname === '/leadership' ? <span className="crumbs" onClick={() => navigate(-1)}>О нас<img src={arrow} alt="" className="mx-4 w-2 h-4"/> Руководство</span> : null}
                    {pathname === '/timeline' ? <span className="crumbs" onClick={() => navigate(-1)}>О нас<img src={arrow} alt="" className="mx-4 w-2 h-4"/>  Хронология развития</span> : null}
                    {pathname === '/jashtar' ? <span className="crumbs" onClick={() => navigate(-1)}>О нас<img src={arrow} alt="" className="mx-4 w-2 h-4"/> Жаштар саясаты</span> : null}
                    {pathname === '/contacts' ? <span className="crumbs" onClick={() => navigate(-1)}>О нас<img src={arrow} alt="" className="mx-4 w-2 h-4"/> Контакты </span>  : null}
                    {pathname === '/projects' ? <span className="crumbs" onClick={() => navigate(-1)}>О нас<img src={arrow} alt="" className="mx-4 w-2 h-4"/> Проекты</span>  : null}

                    {pathname === '/international' ? <span className="crumbs" onClick={() => navigate(-1)}>Координационный совет<img src={arrow} alt="" className="mx-4 w-2 h-4"/>Международные организации</span> : null}
                        {pathname === '/young' ? <span className="crumbs" onClick={() => navigate(-1)}>Координационный совет<img src={arrow} alt="" className="mx-4 w-2 h-4"/>  Молодежные организации</span> : null}
                    {pathname === '/university' ? <span className="crumbs" onClick={() => navigate(-1)}>Координационный совет<img src={arrow} alt="" className="mx-4 w-2 h-4"/>  Совет университетов</span> : null}
                            {pathname === '/partners' ? <span className="crumbs" onClick={() => navigate(-1)}>Координационный совет<img src={arrow} alt="" className="mx-4 w-2 h-4"/>  Партнеры</span> : null}

                    {pathname === '/decrees' ? <span className="crumbs" onClick={() => navigate(-1)}>Документы<img src={arrow} alt="" className="mx-4 w-2 h-4"/> Указы</span> : null}
                    {pathname === '/laws' ? <span className="crumbs" onClick={() => navigate(-1)}>Документы<img src={arrow} alt="" className="mx-4 w-2 h-4"/> Законы</span> : null}
                    {pathname === '/concept' ? <span className="crumbs" onClick={() => navigate(-1)}>Документы<img src={arrow} alt="" className="mx-4 w-2 h-4"/> Концепты</span> : null}
                    {pathname === '/position' ? <span className="crumbs" onClick={() => navigate(-1)}>Документы<img src={arrow} alt="" className="mx-4 w-2 h-4"/> Положения</span> : null}

                    {pathname === '/gallery' ? <span className="crumbs" onClick={() => navigate(-1)}>Галерея<img src={arrow} alt="" className="mx-4 w-2 h-4"/>Фото</span> : null}
                    {pathname === '/news' ? <span className="crumbs" onClick={() => navigate(-1)}>Новости<img src={arrow} alt="" className="mx-4 w-2 h-4"/> Все новости</span> : null}
                    {pathname === '/news/:id' ? <span className="crumbs" onClick={() => navigate(-1)}>Новости<img src={arrow} alt="" className="mx-4 w-2 h-4"/> Все новости</span> : null}
                    {pathname === '/events' ? <span className="crumbs" onClick={() => navigate(-1)}>Мероприятия<img src={arrow} alt="" className="mx-4 w-2 h-4"/> Все событии</span> : null}
                </div>
                <div className='text-lg font-medium text-white' onClick={() => navigate(-1)}>
                    {pathname === '/ministry' ?  <span className="crumbs" onClick={() => navigate(-1)}>О нас <img src={arrow2} alt="" className="mx-4 w-2 h-4 "/>  Министерство</span> : null}
                </div>
                </>
            )}
        </div>
    );
};