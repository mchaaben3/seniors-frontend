import React from 'react';
import { Link } from 'react-router-dom';



const SideBar = () => {
  const [isActive, setIsActive] = React.useState<{ activeIndex: number | null }>({ activeIndex: null });
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = (index: number) => {
    setIsActive({ activeIndex: index });
  };


  const handleNotification = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sidebar ">
      <Link
        to={'/'}
        className={`menu-item ${isActive.activeIndex === 0 ? `active` : ``}`}
        onClick={() => handleClick(0)}
      >
        <span>
          {' '}
          <i className="fa fa-home"></i>
        </span>
        <h4>Home</h4>
      </Link>

      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={`menu-item ${isActive.activeIndex === 1 ? `active` : ``}`} onClick={() => {
        handleClick(1);
        handleNotification();
      }}>
        <span>
          {' '}
          <i className="fa fa-bell">
            <small className="notifications-count">2</small>
          </i>
        </span>
        <h4

        >
          Notifications
        </h4>
        <div
          className={`notifications-popup  ${isActive.activeIndex === 1 && isOpen === false ? `block` : `hidden`
            }`}
        >
          <div>
            <div className="profile-picture">{/* Img here */}</div>
            <div className="notification-body">
              <b>Kais Saied</b> added you as a friend{' '}
              <small className="text-muted">2 DAYS AGO</small>
            </div>
          </div>
          <div>
            <div className="profile-picture">{/* Img here */}</div>
            <div className="notification-body">
              <b>Kais Saied</b> added you as a friend
              <small className="text-muted">2 DAYS AGO</small>
            </div>
          </div>
        </div>
      </a>

      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={`menu-item ${isActive.activeIndex === 2 ? `active` : ``}`} onClick={() => handleClick(2)} >
        <span>
          {' '}
          <i className="fa fa-envelope"></i>
        </span>
        <h4>Messages</h4>
      </a>

      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={`menu-item ${isActive.activeIndex === 3 ? `active` : ``}`} onClick={() => handleClick(3)}       >
        <span>
          {' '}
          <i className="fa fa-book"></i>
        </span>
        <h4>Timeline</h4>
      </a>

      <Link
        className={`menu-item ${isActive.activeIndex === 4 ? `active` : ``}`}
        onClick={() => handleClick(4)}
        to={'/profile'}
      >
        <span>
          {' '}
          <i className="fa fa-user"></i>
        </span>
        <h4>Profile</h4>
      </Link>

      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={`menu-item ${isActive.activeIndex === 5 ? `active` : ``}`} onClick={() => handleClick(5)} >
        <span>
          {' '}
          <i className="fa fa-cog"></i>
        </span>
        <h4>Settings</h4>
      </a>
      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="menu-item " >
        <span>
          {' '}
          <i className="fa fa-sign-out-alt"></i>
        </span>
        <h4>Logout</h4>
      </a>
    </div>
  )
}

export default SideBar