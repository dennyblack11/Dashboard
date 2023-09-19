import React from 'react'
import Dashboardhead from "../Static/Dashboardhead"
import {Outlet} from "react-router-dom"
import Sidebar from "../Static/Sidebar"
import styled from 'styled-components'


const Layout = () => {
  return (
    <div>
        <Dashboardhead/>
        <Holder>
        <Sidebar/>
        <Outlet/>
        </Holder>
    </div>
  )
}

export default Layout

const Holder = styled.div`
  background-color: #FAF9F8;
`