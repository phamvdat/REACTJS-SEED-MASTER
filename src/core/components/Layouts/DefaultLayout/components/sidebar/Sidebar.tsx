/** @jsxImportSource @emotion/react */
import Icon from 'core/components/BaseUI/Icon';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarStyle } from './SidebarStyle';

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
const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showUseFulNews, setShowUseFulNews] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [useFulNewActive, setseFulNewActive] = useState('Useful News 1');
  const [item, setItem] = useState('Home');
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
  return (
    <div
      className="wrapper"
      css={[SidebarStyle.wrapper, !showSidebar ? SidebarStyle.minimunSidebar : undefined]}
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
                      <>
                        <Icon icon={ele.icon} />
                        <h3 css={!showSidebar ? SidebarStyle.hidenItem : undefined}>{ele.label}</h3>
                      </>
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
                      <Icon icon={ele.icon} />
                      <h3 css={!showSidebar ? SidebarStyle.hidenItem : undefined}>{ele.label}</h3>
                      {ele.surfixIcon && (
                        <Icon icon={showUseFulNews ? ele.surfixIcon[1] : ele.surfixIcon[0]} />
                      )}
                    </div>
                    {showUseFulNews && (
                      <ul css={SidebarStyle.dropDownList}>
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
                              <NavLink to={e.path}>
                                <h3 css={SidebarStyle.hidenItem}>{e.label}</h3>
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
          <Icon icon="mode-solid" />
          <h3 css={!showSidebar ? SidebarStyle.hidenItem : undefined}>Mode</h3>
          {darkMode ? (
            <Icon icon="dark-mode" size={20} onClick={() => setDarkMode(false)} />
          ) : (
            <Icon icon="light-mode" size={20} onClick={() => setDarkMode(true)} />
          )}
        </li>
        <li>
          <div>
            <div css={[SidebarStyle.item]} onClick={() => setShowLanguages(!showLanguages)}>
              <Icon icon="vietnam" />
              <h3 css={!showSidebar ? SidebarStyle.hidenItem : undefined}>Tiếng Việt</h3>
              {showLanguages ? <Icon icon="up-arrow-solid" /> : <Icon icon="down-arrow-solid" />}
            </div>
            {showLanguages && (
              <ul css={SidebarStyle.dropDownListLanguage}>
                <li>
                  <h3>Tiếng Việt</h3>
                </li>
                <li>
                  <h3>English</h3>
                </li>
              </ul>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
