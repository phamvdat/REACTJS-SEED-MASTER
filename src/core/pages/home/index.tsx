/** @jsxImportSource @emotion/react */
import TradingButton from 'core/components/BaseUI/Button/trading-button/trading-button';
import Icon from 'core/components/BaseUI/Icon';
import { ColorType } from 'core/types/base-ui';
import { NavLink } from 'react-router-dom';
import { HomeStyle } from './home-style';

interface Data {
  color: ColorType;
  label: string;
}
const listItem: Data[] = [
  {
    color: 'red',
    label: 'Forex',
  },
  {
    color: 'blue',
    label: 'Commodities',
  },
  {
    color: 'yellow',
    label: 'Crypto',
  },
  {
    color: 'red',
    label: 'Stock',
  },
  {
    color: 'red',
    label: 'Forex',
  },
  {
    color: 'blue',
    label: 'Commodities',
  },
  {
    color: 'yellow',
    label: 'Crypto',
  },
  {
    color: 'red',
    label: 'Stock',
  },
];

const HomePage = () => {
  return (
    <div css={HomeStyle.self}>
      <nav css={HomeStyle.navBar}>
        <ul>
          <li css={HomeStyle.navItemActive}>
            <NavLink to="/general">General News</NavLink>
          </li>
          <li>
            <NavLink to="/Forex">Forex</NavLink>
          </li>
          <li>
            <NavLink to="/Crypto">Crypto</NavLink>
          </li>
          <li>
            <NavLink to="/Commodities">Commodities</NavLink>
          </li>
          <li>
            <NavLink to="/Stock">Stock</NavLink>
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
                  <TradingButton label={data.label} color={data.color} />
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
