/** @jsxImportSource @emotion/react */
import Icon from 'core/components/BaseUI/Icon';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarStyle } from './SideBarStyle';

interface SubNavbarItem {
  label: string;
  path: string;
}
interface NavbarItem {
  label: string;
  path?: string;
  icon: string;
  surfixIcon?: string[];
  children?: SubNavbarItem[];
}
interface Language {
  label: string;
  icon: string;
}

const listLanguage: Language[] = [
  {
    label: 'VietNam',
    icon: 'vietnam',
  },
  {
    label: 'English',
    icon: 'england',
  },
  {
    label: 'Germany',
    icon: 'Germany',
  },
];
const navbarList: NavbarItem[] = [
  {
    label: 'Home',
    path: '/home',
    icon: 'home-solid',
  },
  {
    label: 'Useful News',
    icon: 'users-solid',
    surfixIcon: ['down-arrow-solid', 'up-arrow-solid'],
    children: [
      {
        label: 'Useful News 1',
        path: '/useful-news-1',
      },
      {
        label: 'Useful News 2',
        path: '/useful-news-2',
      },
    ],
  },
  {
    label: 'New',
    path: '/new',
    icon: 'news-solid',
  },
  {
    label: 'Complaints',
    path: '/complaints',
    icon: 'comment-solid',
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: 'settings-solid',
  },
  {
    label: 'Unlock-sidebar',
    path: '/unlock-sidebar',
    icon: 'locked-solid',
  },
  {
    label: 'References',
    path: '/references',
    icon: 'preferences-solid',
  },
];
const SideBar = () => {
  const [language, setLanguage] = useState<Language>({ label: 'Viet Nam', icon: 'vietnam' });
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [showUseFulNews, setShowUseFulNews] = useState<boolean>(false);
  const [showLanguages, setShowLanguages] = useState<boolean>(false);
  const [useFulNewActive, setseFulNewActive] = useState<string>('Useful News 1');
  const [item, setItem] = useState('Home');
  const handleDarkMode = () => {
    if (darkMode) {
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
      document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
    }
    if (!darkMode) {
      localStorage.setItem('theme', 'dark');
      document.getElementsByTagName('body')[0].setAttribute('data-theme', 'dark');
      setDarkMode(true);
    }
  };
  useEffect(() => {
    document
      .getElementsByTagName('body')[0]
      .setAttribute('data-theme', localStorage.getItem('theme') || 'light');
  }, []);
  return (
    <div
      className="wrapper"
      css={[SidebarStyle.wrapper, !showSidebar && SidebarStyle.minimunSidebar]}
    >
      <div css={SidebarStyle.btn}>
        {showSidebar ? (
          <Icon
            icon="chevron-double-left"
            onClick={() => {
              setShowSidebar(false);
              setShowLanguages(false);
              setShowUseFulNews(false);
            }}
          />
        ) : (
          <Icon icon="chevron-double-right" onClick={() => setShowSidebar(true)} />
        )}
      </div>
      <nav>
        <ul>
          {navbarList.map((ele: NavbarItem, idx: number) => {
            return (
              <li key={idx}>
                {ele.path ? (
                  <div>
                    <NavLink
                      css={
                        item === ele.label
                          ? [SidebarStyle.item, SidebarStyle.itemActive]
                          : [SidebarStyle.item]
                      }
                      to={ele.path}
                    >
                      <span style={{ width: '20px' }}>
                        <Icon icon={ele.icon} />
                      </span>
                      <h3 css={!showSidebar && SidebarStyle.hidenItem}>{ele.label}</h3>
                    </NavLink>
                  </div>
                ) : (
                  <div>
                    <div
                      css={
                        item === ele.label
                          ? [SidebarStyle.item, SidebarStyle.itemActive]
                          : [SidebarStyle.item]
                      }
                      onClick={() => setShowUseFulNews(!showUseFulNews)}
                    >
                      <span style={{ width: '20px' }}>
                        <Icon icon={ele.icon} />
                      </span>

                      <h3 css={!showSidebar && SidebarStyle.hidenItem}>{ele.label}</h3>
                      {ele.surfixIcon && (
                        <span
                          style={{ width: '20px' }}
                          css={!showSidebar && SidebarStyle.hidenItem}
                        >
                          <Icon icon={showUseFulNews ? ele.surfixIcon[1] : ele.surfixIcon[0]} />
                        </span>
                      )}
                    </div>
                    {showSidebar && showUseFulNews && (
                      <ul css={[SidebarStyle.dropDownList, !showSidebar && SidebarStyle.hidenItem]}>
                        {ele.children?.map((e: SubNavbarItem, idx: number) => {
                          return (
                            <li
                              key={idx}
                              css={
                                useFulNewActive === e.label
                                  ? SidebarStyle.dropDownItemActive
                                  : undefined
                              }
                            >
                              <NavLink to={e.path} onClick={() => setseFulNewActive(e.label)}>
                                <h3>{e.label}</h3>
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <ul css={SidebarStyle.downContent}>
        <li css={SidebarStyle.item}>
          <span style={{ width: '20px' }}>
            <Icon icon="mode-solid" size={20} />
          </span>

          <h3 css={!showSidebar && SidebarStyle.hidenItem}>Mode</h3>
          <span style={{ width: '35px' }} css={!showSidebar && SidebarStyle.hidenItem}>
            <Icon
              icon={darkMode ? 'light-mode' : 'dark-mode'}
              size={32}
              onClick={() => handleDarkMode()}
            />
          </span>
        </li>
        <li>
          <div>
            <div css={[SidebarStyle.item]} onClick={() => setShowLanguages(!showLanguages)}>
              <span style={{ width: '22px' }}>
                <Icon icon={language.icon} size={22} />
              </span>

              <h3 css={!showSidebar && SidebarStyle.hidenItem}>{language.label}</h3>
              <span style={{ width: '20px' }} css={!showSidebar && SidebarStyle.hidenItem}>
                {showLanguages ? <Icon icon="up-arrow-solid" /> : <Icon icon="down-arrow-solid" />}
              </span>
            </div>
            {showSidebar && showLanguages && (
              <ul css={SidebarStyle.dropDownListLanguage}>
                {listLanguage.map((language: Language, idx: number) => {
                  return (
                    <li key={idx}>
                      <h3
                        onClick={() => {
                          setLanguage(language);
                          setShowLanguages(false);
                        }}
                      >
                        {language.label}
                      </h3>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};
export default SideBar;
