import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles['sidebar-container']}>
      <div className={styles['sidebar']}>
        <div className={styles['sidebar-menu']}>
          <h3 className={styles['sidebar-title']}>Menus</h3>
          <ul className={styles['sidebar-list']}>
            <li className={`${styles['sidebar-list-item']} ${styles.active}`}>
              Menu1
            </li>
            <li className={styles['sidebar-list-item']}>Menu2</li>
            <li className={styles['sidebar-list-item']}>Menu3</li>
          </ul>
        </div>

        <div className={styles['sidebar-menu']}>
          <h3 className={styles['sidebar-title']}>Menus</h3>
          <ul className={styles['sidebar-list']}>
            <li className={styles['sidebar-list-item']}>Menu4</li>
            <li className={styles['sidebar-list-item']}>Menu5</li>
            <li className={styles['sidebar-list-item']}>Menu6</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
