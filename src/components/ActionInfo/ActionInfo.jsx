import { useLocation, NavLink } from 'react-router-dom';

export const ActionInfo = () => {
  const location = useLocation();
  return (
    <ul>
      <li>
      <NavLink to="cast" state={location.state}>
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink to="reviews" state={location.state}>
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};
