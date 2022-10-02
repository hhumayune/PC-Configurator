import React from 'react'
import './header.css'

const Header = () => {
  return (
    <section>
      <div className="App-header">PC component builder</div>
      <div className="header-secondary">
        <div className='hcolumn'>
          <div className="tab">PC builder</div>
        </div>
        <div className='hcolumn'>
          <div className="tab">Build Guides</div>
        </div>
        <div className='hcolumn'>
          <div className="tab">Community Builds</div>
        </div>
        <div className='hcolumn'>
          <div className="tab">Account</div>
        </div>
      </div>
    </section>
  );
}

export default Header