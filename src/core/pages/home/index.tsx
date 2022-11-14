/** @jsxImportSource @emotion/react */
import Icon from 'core/components/BaseUI/Icon';
import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { HomeStyle } from './home-style';

interface Data {
  label: string;
}
const listItem: Data[] = [
  {
    label: 'Forex',
  },
  {
    label: 'Commodities',
  },
  {
    label: 'Crypto',
  },
  {
    label: 'Stock',
  },
  {
    label: 'Forex',
  },
  {
    label: 'Commodities',
  },
  {
    label: 'Crypto',
  },
  {
    label: 'Stock',
  },
];

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState<string>('general-news');
  useEffect(() => {
    setTab(searchParams.get('tab') || '');
  }, [searchParams]);
  return (
    <div css={HomeStyle.self}>
      <nav css={HomeStyle.navBar}>
        <ul>
          <li>
            <NavLink
              to="/home?tab=general-news"
              css={tab === 'general-news' && HomeStyle.navItemActive}
            >
              General News
            </NavLink>
          </li>
          <li>
            <NavLink to="/home?tab=forex" css={tab === 'forex' && HomeStyle.navItemActive}>
              Forex
            </NavLink>
          </li>
          <li>
            <NavLink to="/home?tab=crypto" css={tab === 'crypto' && HomeStyle.navItemActive}>
              Crypto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home?tab=commodities"
              css={tab === 'commodities' && HomeStyle.navItemActive}
            >
              Commodities
            </NavLink>
          </li>
          <li>
            <NavLink to="/home?tab=stock" css={tab === 'stock' && HomeStyle.navItemActive}>
              Stock
            </NavLink>
          </li>
        </ul>
        <div css={HomeStyle.wrapperFilter}>
          <Icon icon="filter-solid" />
          <Icon icon="fire-solid" />
          <Icon icon="bars-solid" />
          <Icon icon="pause-solid" />
        </div>
      </nav>
      <div css={HomeStyle.wrapperListItem}>
        <ul>
          {listItem.map((data: Data, idx: number) => {
            return (
              <li css={HomeStyle.contentItem} key={idx}>
                <div>
                  {/* <TradingButton label={data.label} color={data.color} /> */}
                  <h6>16.03.2022</h6>
                  <h6>10:25</h6>
                </div>
                <div>
                  <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam eligendi
                    consequatur maiores officia ab, ut veniam rem deserunt aliquid.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quos
                    ducimus nihil voluptas voluptatum deserunt repudiandae dolores quia laudantium
                    dolorum! Tenetur libero et hic assumenda placeat totam porro fugiat incidunt!
                  </p>
                  <div css={HomeStyle.wrapperInteract}>
                    <span>
                      <Icon icon="like" /> Useful
                    </span>
                    <span>
                      <Icon icon="share" /> Share
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
