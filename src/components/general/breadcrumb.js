import {useLocation, useParams, } from "react-router-dom";
import {useNavigate} from "react-router";
import arrow from "../../assets/image/general/arr.svg"
import arrow2  from "../../assets/image/general/arr2.svg"
import {useTranslation} from "react-i18next";


export const BreadCrumb = () => {
    const location = useLocation();
    const id = useParams()
    const navigate = useNavigate()
    const {pathname} = location
    const {t} = useTranslation()

    return (
        <div className='pt-[62px] mb-8'>
            {pathname && (
                <>
                <div className='text-lg font-medium text-grey'>
                    {pathname === '/valuation' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("valuation")}</span> : null}
                    {pathname === '/management' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("leadship")}</span> : null}
                    {pathname === '/timeline' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("timeline")}</span> : null}
                    {pathname === '/policy' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("young")}</span> : null}
                    {pathname === '/contacts' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("contacts")}</span>  : null}
                    {pathname === '/projects' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("projects")}</span>  : null}

                    {pathname === '/international' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("coordination")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("internalization")}</span> : null}
                        {pathname === '/young' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("coordination")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("young")}</span> : null}
                    {pathname === '/university' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("coordination")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("university")}</span> : null}
                            {pathname === '/partners' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("coordination")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("partners")}</span> : null}

                    {pathname === '/decress' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("documents")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("decrees")}</span> : null}
                    {pathname === '/laws' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("documents")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("laws")}</span> : null}
                    {pathname === '/statements' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("documents")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("statements")}</span> : null}
                    {pathname === '/constitution' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("documents")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("constitutions")}</span> : null}
                    {pathname === '/codes' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("documents")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("codecs")}</span> : null}

                    {pathname === '/news' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("news")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("allNews")}</span> : null}
                    {pathname === '/news/:id' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("news")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("allNews")}</span> : null}
                    {pathname === '/events' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("events")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("allEvents")}</span> : null}
                    {pathname === '/category:id' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("documents")}<img src={arrow} alt="" className="mx-4 w-2 h-4"/>{t("")}</span> : null}
                </div>
                <div className='text-lg font-medium text-white' onClick={() => navigate(-1)}>
                    {pathname === '/ministry' ?  <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow2} alt="" className="mx-4 w-2 h-4 "/>{t("ministry")}</span> : null}
                </div>
                </>
            )}
        </div>
    );
};