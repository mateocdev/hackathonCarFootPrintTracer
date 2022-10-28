import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	CContainer,
	CHeader,
	CHeaderBrand,
	CHeaderDivider,
	CHeaderNav,
	CHeaderToggler,
	CNavLink,
	CNavItem,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
	cilBell,
	cilEnvelopeOpen,
	cilList,
	cilMenu,
	cilUser,
} from '@coreui/icons';

import { AppBreadcrumb } from './index';
import { AppHeaderDropdown } from './header/index';
import logo from 'src/assets/brand/logo.svg';
import AngularImg from 'src/assets/images/EcoTracer.png';
import logoImg from 'src/assets/images/logo.png';

const AppHeader = () => {
	const dispatch = useDispatch();
	const sidebarShow = useSelector((state) => state.sidebarShow);

	return (
		<CHeader position='sticky' className=' header-custom'>
			<CContainer fluid>
				<div className='img-log'>
					<img src={logoImg} className='d-block' />
				</div>
				<img className='d-block' src={AngularImg} alt='slide 2' />
				<CHeaderNav className='d-none d-md-flex me-auto'></CHeaderNav>
				<CHeaderNav className='ms-3'>
					<CIcon icon={cilUser} height={25} className='user-icon'></CIcon>
				</CHeaderNav>
			</CContainer>
		</CHeader>
	);
};

export default AppHeader;
