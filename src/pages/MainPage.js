import React from 'react'
import BuildPanel from '../components/BuildPanel'
import GuidePanel from '../components/GuidePanel'
import '../App.css'

const MainPage = () => {
    const pstyle = {padding:80}

  return (
    <div className='content'>
        <div style={pstyle}>
            <h1>Build Guides</h1>
            <p>Building your own PC and need ideas on where to get started? Explore our build guides which cover systems for a variety of use-cases and budgets.</p>
            <div className='panel-container'>
                <GuidePanel text={'Best for Budget'} description={'CPU, MB, RAM'}/>
                <GuidePanel text={'Mid Range'} description={'CPU, MB, RAM'}/>
                <GuidePanel text={'High-End'} description={'CPU, MB, RAM'}/>
            </div>
        </div>
        <div style={pstyle}>
            <h1>Featured Builds</h1>
            <p>Check out some of our popular community builds!</p>
            <div className='fpanel-container'>
                <div className='panels-featured-message'>
                    <h3>Featured build</h3>
                    <p>build of the day</p>
                </div>
                <BuildPanel text={'FeaturedPanel'} description={'CPU, MB, RAM'}/>
            </div>
            <div className='panel-container'>
                <BuildPanel text={'FeaturedPanel'} description={'CPU, MB, RAM'}/>
                <BuildPanel text={'FeaturedPanel'} description={'CPU, MB, RAM'}/>
            </div>
            <div className='panel-container'>
                <BuildPanel text={'FeaturedPanel'} description={'CPU, MB, RAM'}/>
                <BuildPanel text={'FeaturedPanel'} description={'CPU, MB, RAM'}/>
            </div>
            <div className='panel-container'>
                <BuildPanel text={'FeaturedPanel'} description={'CPU, MB, RAM'}/>
                <BuildPanel text={'FeaturedPanel'} description={'CPU, MB, RAM'}/>
            </div>
        </div>
    </div>
  )
}

export default MainPage