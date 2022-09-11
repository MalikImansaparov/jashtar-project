import MainPage from "../pages/mainPage";
import Valuation from "../pages/aboutPages/valuation";
import Leadership from "../pages/aboutPages/leadership";
import TimeLine from "../pages/aboutPages/timeLine/timeLine";
import Ministry from "../pages/aboutPages/ministry";
import {Contacts} from "../pages/aboutPages/contacts";
import {JashtarProject} from "../pages/aboutPages/jashtarProject";
import {InternationOrganization} from "../pages/cordinationPages/internationaOrganization";
import {YoungOrganization} from "../pages/cordinationPages/youthoOrganization";
import {UniversitySoviet} from "../pages/cordinationPages/universitySoviet";
import {PartnersList} from "../pages/cordinationPages/partners";
import InfoPartners from "../pages/cordinationPages/infoPartners";
import DetailNews from "../pages/detailNews";
import NewsPage from "../pages/newsPage";
import EventsPage from "../pages/eventsPage";
import DetailEvents from "../pages/detailEvents";
import GalleryPage from "../pages/galeryPage/galeryPage";
import DecreesDetail from "../pages/documentPage/DocChldren/decreesDetail";
import PositionDetail from "../pages/documentPage/DocChldren/positionDetail";
import LawsDetail from "../pages/documentPage/DocChldren/lawsDetail";
import Concepts from "../pages/documentPage/DocList/concepts";
import ConceptsDetail from "../pages/documentPage/DocChldren/conceptsDetail";
import YMap from "../pages/y-map";
import Decrees from "../pages/documentPage/DocList/decrees";
import Laws from "../pages/documentPage/DocList/laws";
import Positions from "../pages/documentPage/DocList/position";
import Projects from "../pages/aboutPages/project/projects";
import InfoLeadership from "../components/leadship/infoLeadership";

export const publicRoutes = [
    { path: '/', component: MainPage },
    { path: '/valuation', component: Valuation },
    { path: '/leadership', component: Leadership },
    { path: '/timeline', component: TimeLine },
    { path: '/ministry', component: Ministry },
    { path: '/projects', component: Projects },
    { path: '/contacts', component: Contacts },
    { path: '/jashtar', component: JashtarProject },
    { path: '/international', component: InternationOrganization },
    { path: '/young', component: YoungOrganization },
    { path: '/university', component: UniversitySoviet},
    { path: '/partners', component: PartnersList },
    { path: '/partners/:id', component: InfoPartners },
    { path: '/news', component: NewsPage },
    { path: '/news/:id', component: DetailNews },
    { path: '/events', component: EventsPage },
    { path: '/events/:id', component: DetailEvents },
    { path: '/gallery', component: GalleryPage },
    { path: '/decrees', component: Decrees },
    { path: '/position', component: Positions },
    { path: '/laws', component: Laws},
    { path: '/concept', component: Concepts},
    { path: '/decrees/:id', component: DecreesDetail },
    { path: '/position/:id', component: PositionDetail },
    { path: '/laws/:id', component: LawsDetail},
    { path: '/concept/:id', component: ConceptsDetail},
    { path: '/y-map', component: YMap},
    { path: '/leadership/:id', component: InfoLeadership},
];
