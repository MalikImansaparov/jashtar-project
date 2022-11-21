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
import Projects from "../pages/aboutPages/project/projects";
import InfoLeadership from "../components/leadship/infoLeadership";
import SearchPage from "../components/SearchPage";
import CategoryList from "../pages/documentPage/DocList/category";
import DocumentDetail from "../pages/documentPage/DocChldren/categoryDetail";
import {YoungCouncil} from "../pages/cordinationPages/youthCouncil";
import {VolunterForm} from "../components/main/FormPage/VolunterForm";
import InfoTimeLine from "../pages/aboutPages/timeLine/infoTab";

export const publicRoutes = [
  { path: '/', component: MainPage },
  { path: '/valuation', component: Valuation },
  { path: '/leadership', component: Leadership },
  { path: '/timeline', component: TimeLine },
  { path: '/timeline/:id', component: InfoTimeLine },
  { path: '/ministry', component: Ministry },
  { path: '/projects', component: Projects },
  { path: '/contacts', component: Contacts },
  { path: '/policy', component: JashtarProject },
  { path: '/international', component: InternationOrganization },
  { path: '/young', component: YoungOrganization },
  { path: '/university', component: UniversitySoviet },
  { path: '/partners', component: PartnersList },
  { path: '/partners/:id', component: InfoPartners },
  { path: '/news', component: NewsPage },
  { path: '/news/:id', component: DetailNews },
  { path: '/events', component: EventsPage },
  { path: '/events/:id', component: DetailEvents },
  { path: '/gallery', component: GalleryPage },
  { path: '/category/:id', component: CategoryList },
  { path: '/document/:id', component: DocumentDetail },
  { path: '/leadership/:id', component: InfoLeadership },
  { path: '/search', component: SearchPage },
  { path: '/community', component: YoungCouncil },
  { path: '/volunteer/:id', component: VolunterForm },
];
