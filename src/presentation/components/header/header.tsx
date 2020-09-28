import React from 'react'
import { Logo } from '@/presentation/components'
import Styles from './header-styles.scss'

const Header: React.FC = () => {
  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <Logo />
        <div className={Styles.logoutWrap}>
          <span> Dia a Dia</span>
          <a href="#">Sair</a>
        </div>
      </div>
    </header>
  )
}

export default Header
