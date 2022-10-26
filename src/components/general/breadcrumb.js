import {useLocation, useParams, } from "react-router-dom";
import {useNavigate} from "react-router";
import arrow from "../../assets/image/general/arr.svg"
import arrow2  from "../../assets/image/general/arr2.svg"
import {useTranslation} from "react-i18next";

export const BreadCrumb = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const {pathname} = location
    const {t} = useTranslation()

    return (
        <div className='pt-[62px] mb-8 font-inter sm:ml-4 1xs:pt-0'>
            {pathname && (
                <>
                <div className='text-lg font-medium text-grey 1xs:text-[14px] 1xs:mt-12 2xs:text-[12px]'>
                    {pathname === '/valuation' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow} alt="" className="arrow"/>{t("valuation")}</span> : null}
                    {pathname === '/management' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow} alt=""className="arrow"/>{t("leadship")}</span> : null}
                    {pathname === '/timeline' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow} alt="" className="arrow"/>{t("timeline")}</span> : null}
                    {pathname === '/policy' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow} alt="" className="arrow"/>{t("policy")}</span> : null}
                    <div className='text-lg font-medium text-white' onClick={() => navigate(-1)}>
                        {pathname === '/volunteer/3' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("home")}<img src={arrow2} alt="" className="arrow"/>{t("insan")}</span> : null}
                        {pathname === '/volunteer/1' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("home")}<img src={arrow2} alt="" className="arrow"/>{t("kelecheck")}</span> : null}
                        {pathname === '/volunteer/5' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("home")}<img src={arrow2} alt="" className="arrow"/>{t("volunter")}</span> : null}
                    {pathname === '/contacts' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow2} alt="" className="arrow"/>{t("contacts")}</span>  : null}
                    </div>
                        {pathname === '/projects' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow} alt="" className="arrow"/>{t("projects")}</span>  : null}

                    {pathname === '/international' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("coordination")}<img src={arrow} alt="" className="arrow"/>{t("internalization")}</span> : null}
                    {pathname === '/community' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("coordination")}<img src={arrow} alt="" className="arrow"/>{t("community")}</span> : null}
                    {pathname === '/young' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("coordination")}<img src={arrow} alt="" className="arrow"/>{t("young")}</span> : null}
                    {pathname === '/university' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("coordination")}<img src={arrow} alt="" className="arrow"/>{t("university")}</span> : null}
                            {pathname === '/partners' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("coordination")}<img src={arrow} alt="" className="arrow"/>{t("partners")}</span> : null}

                    {pathname === '/decress' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("documents")}<img src={arrow} alt="" className="arrow"/>{t("decrees")}</span> : null}
                    {pathname === '/laws' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("documents")}<img src={arrow} alt="" className="arrow"/>{t("laws")}</span> : null}
                    {pathname === '/statements' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("documents")}<img src={arrow} alt="" className="arrow"/>{t("statements")}</span> : null}
                    {pathname === '/constitution' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("documents")}<img src={arrow} alt="" className="arrow"/>{t("constitutions")}</span> : null}
                    {pathname === '/codes' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("documents")}<img src={arrow} alt="" className="arrow"/>{t("codecs")}</span> : null}

                    {pathname === '/news' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("news")}<img src={arrow} alt="" className="arrow"/>{t("allNews")}</span> : null}
                    {pathname === '/news/:id' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("news")}<img src={arrow} alt="" className="arrow"/>{t("allNews")}</span> : null}
                    {pathname === '/events' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("events")}<img src={arrow} alt="" className="arrow"/>{t("allEvents")}</span> : null}
                    {pathname === '/category:id' ? <span className="crumbs" onClick={() => navigate(-1)}>{t("documents")}<img src={arrow} alt="" className="arrow"/>{t("")}</span> : null}
                </div>
                <div className='text-lg font-medium text-white' onClick={() => navigate(-1)}>
                    {pathname === '/ministry' ?  <span className="crumbs" onClick={() => navigate(-1)}>{t("about")}<img src={arrow2} alt="" className="mx-4 w-2 h-4 xs:mx-2"/>{t("ministry")}</span> : null}
                </div>
                </>
            )}
        </div>
    );
};