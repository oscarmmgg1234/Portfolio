import React from 'react'
import '../../ComponentsCSS/portfolio.css'

const Port = () => {
    return (
                <div className={"portfolioContainer"}>
                    <img src={require('../../ASSETS/IMAGES/AdobeStock_298907406.jpeg')} className={'portImage'}/>
                    <div className={'portTitle'}> Portfolio </div>
                    <div className={'item1'} >
                        <div className="ui card">
                            <div className="image">

                            </div>
                            <div className="content">
                                <a className="header" href={'https://github.com/oscarmmgg1234/CSEWebDevelopment'}>Web Portfolio SRC </a>

                                <div className="description">
                                    Web portfolio website using
                                    ReactJs, Firebase, SemanticUI, Bootstrap, StipeJs.
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={'item2'}>
                        <div className="ui card">
                            <div className="image">
                            </div>
                            <div className="content">
                                <a className="header" href={'https://github.com/oscarmmgg1234/AdvanceDataStructures-C-'}>Data Structures/ Algorithms</a>

                                <div className="description">
                                    Advance data structures using c++, as well as optimization and
                                    algorithm analysis.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'item3'}>
                        <div className="ui card">
                            <div className="image">

                            </div>
                            <div className="content">
                                <a className="header" href={'https://github.com/oscarmmgg1234/SystemAdministration'}>System Administration</a>

                                <div className="description">
                                    Using VmWare to create and administer virtual Router and switch as well as
                                    DNS,Ftp, Nfs, Http/Https, CentOs virtual workstation, and Tcp servers.
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={'item4'}>
                        <div className="ui card">
                            <div className="image">

                            </div>
                            <div className="content">
                                <a className="header" href={'https://github.com/oscarmmgg1234/BarberShop'}>Barber App</a>

                                <div className="description">
                                    Using ReactJs and Redux to create an cross platform app for mobile.
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={'item5'}>
                        <div className="ui card">
                            <div className="image">

                            </div>
                            <div className="content">
                                <a className="header" href={'https://github.com/oscarmmgg1234/pathfidingGameInQT-Cplusplus'}>PathFinding</a>

                                <div className="description">
                                    Using Qt c++ framework to create a desktop/web assembly game in
                                    which you use path finding algorithms such as Dijkstra's, A*, D*.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'item6'}>
                        <div className="ui card">
                            <div className="image">

                            </div>
                            <div className="content">
                                <a className="header" href={'https://github.com/oscarmmgg1234/PictureUploadCloudService'}>Image API database</a>

                                <div className="description">
                                    Used python and Python Flask to create a API for allowing users to be able
                                    to sign in and safely upload and download images through both web and mobile
                                    browsers.
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

    )//end of component
}//end of component

export default Port