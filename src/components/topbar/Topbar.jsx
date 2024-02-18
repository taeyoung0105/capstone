import React from 'react';
import styles from './Topbar.module.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import GitHubIcon from '@mui/icons-material/GitHub';
const Topbar = () => {
  return (
    <div className={styles['topbar-container']}>
      <div className={styles['topbar']}>
        <div className={styles['topbar-left']}>
          <span className={styles['logo']}>미정</span>
        </div>
        <div className={styles['topbar-right']}>
          <div className={styles['topbar-icon']}>
            <NotificationsNoneIcon />
            <span className={styles['icon-badge']}>2</span>
          </div>
          <div className={styles['topbar-icon']}>
            <GitHubIcon />
          </div>
          <div className={styles['topbar-icon']}>
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
