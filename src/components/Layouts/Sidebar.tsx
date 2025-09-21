import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '../../store';
import { useState, useEffect } from 'react';
import { ChevronRight, CircleUserRound, Dot, IdCard } from 'lucide-react';
import blog from '../../assets/icons/blog.svg'
import ecommerce from '../../assets/icons/ShoppingBagOpen.svg'
import user from '../../assets/icons/user.svg'
import social from '../../assets/icons/social.svg'
import corporate from '../../assets/icons/corporate.svg'
import project from '../../assets/icons/project.svg'
import course from '../../assets/icons/course.svg'
import defaultIcon from '../../assets/icons/default.svg'

const Sidebar = () => {
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => (oldValue === value ? '' : value));
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const isActiveRoute = (path: string) => location.pathname === path;

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-4 py-3">
                        <NavLink to="/" className="main-logo flex items-center shrink-0">
                            <CircleUserRound className="w-6 h-6" />
                            <span className="text-sm font-inter ltr:ml-1.5 rtl:mr-2 font-normal align-middle lg:inline dark:text-white-light">
                                {t('ByeWind')}
                            </span>
                        </NavLink>
                    </div>

                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">

                            {/* Dashboard */}
                            <li className="menu nav-item">
                                 <button
                                    type="button"
                                    className={` nav-link group w-full`}
                                >
                                    <span className="rtl:pr-3 text-black/40 text-sm dark:text-[#506690] flex gap-12 w-full">{t('Favourites')} <span className='text-gray-300'>Recently</span></span>
                                </button>

                                <ul>
                                    <li className='py-1 flex items-center'><Dot className='w-8 h-8 text-gray-400'/>Overview</li>
                                    <li className='py-1 flex items-center'><Dot className='w-8 h-8 text-gray-400'/>Projects</li>
                                </ul>

                                <button
                                    type="button"
                                    className={` nav-link group w-full`}
                                >
                                    <span className="rtl:pr-3 text-black/40 text-sm dark:text-[#506690]">{t('Dashboard')}</span>
                                </button>

                                <ul className="text-gray-500">
                                    <li className="menu nav-item">
                                        <Link to='/' className={`${
                                        isActiveRoute('/') ? 'active border-l-2 border-black dark:!border-white' : ''
                                    } nav-link group w-full`}>
                                            <div className="flex items-center" >
                                                <span className="ltr:pl-8 text-black dark:text-[#506690] dark:group-hover:text-white-dark capitalize">
                                                    <img src={defaultIcon} alt='icon' className='inline w-5 h-5'/> {t('default')}  
                                                </span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className="nav-link group w-full">
                                            <div className="flex items-center">
                                                <ChevronRight />
                                                <span className="ltr:pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    <img src={ecommerce} alt='icon' className='inline w-5 h-5'/> {t('eCommerce')}
                                                </span>
                                            </div>
                                        </button>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className="nav-link group w-full">
                                            <div className="flex items-center">
                                                <ChevronRight />
                                                <span className="ltr:pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark capitalize">
                                                    <img src={project} alt='icon' className='inline w-5 h-5'/> {t('Projects')}
                                                </span>
                                            </div>
                                        </button>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className="nav-link group w-full">
                                            <div className="flex items-center">
                                                <ChevronRight />
                                                <span className="ltr:pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark capitalize">
                                                    <img src={course} alt='icon' className='inline w-5 h-5'/> {t('online courses')}
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </li>

                            {/* Pages */}
                            <li className="menu nav-item">
                                <button type="button" className="nav-link group w-full">
                                    <span className="rtl:pr-3 text-black/40 text-sm dark:text-[#506690] capitalize">
                                        {t('Pages')}
                                    </span>
                                </button>

                                <ul className="text-gray-500">
                                    <li className="menu nav-item">
                                        <button
                                            type="button"
                                            className="nav-link group w-full"
                                            onClick={() => toggleMenu('user-profile')}
                                        >
                                            <div className="flex items-center">
                                                <div className={currentMenu === 'user-profile' ? '!rotate-90' : 'rtl:rotate-180'}>
                                                    <ChevronRight />
                                                </div>
                                                <span className="ltr:pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark capitalize">
                                                    <img src={user} alt='icon' className='inline w-5 h-5'/> {t('user profile')}
                                                </span>
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'user-profile' ? 'auto' : 0}>
                                            <ul className="sub-menu list-none text-gray-500 dark:text-[#506690]">
                                                <li>
                                                    <Link to="/user/overview" className={`${
                                        isActiveRoute('/user/overview') ? 'active border-l-2 border-black dark:border-white bg-gray-light dark:bg-white/5 !text-black dark:!text-white/40' : ''
                                    }`}>{t('Overview')}</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">{t('Projects')}</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">{t('Campaigns')}</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">{t('Documents')}</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">{t('Followers')}</Link>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className="nav-link group w-full">
                                            <div className="flex items-center">
                                                <ChevronRight />
                                                <span className="ltr:pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark capitalize">
                                                    <IdCard className='inline bg-gray-200 rounded'/> {t('account')}
                                                </span>
                                            </div>
                                        </button>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className="nav-link group w-full">
                                            <div className="flex items-center">
                                                <ChevronRight />
                                                <span className="ltr:pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark capitalize">
                                                    <img src={corporate } alt='icon' className='inline w-5 h-5'/> {t('corporate')}
                                                </span>
                                            </div>
                                        </button>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className="nav-link group w-full">
                                            <div className="flex items-center">
                                                <ChevronRight />
                                                <span className="ltr:pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark capitalize">
                                                    {t('blog')}
                                                </span>
                                            </div>
                                        </button>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className="nav-link group w-full">
                                            <div className="flex items-center">
                                                <ChevronRight />
                                                <span className="ltr:pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark capitalize">
                                                    {t('social')}
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
