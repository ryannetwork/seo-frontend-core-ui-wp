import React, {Component} from 'react';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';
import PropTypes from 'prop-types';

import {AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler} from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import {COMMON_APP} from "../../common/common_app";
import {CONSTANTS} from "../../common/constants";
import {fetchLogoutRequest} from "../../epics-reducers/services/fetch-logout.duck";
import {connect} from 'react-redux';
import {Link, HashRouter} from 'react-router-dom'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.notify !== prevProps.notify) {
      if(this.props.notify.success){
        switch (this.props.notify.method) {
          case 'get':
            //alert('Thành công')
            break;
          case 'post':
            alert('Thêm mới thành công')
            break;
          case 'put':
            alert('Cập nhật thành công')
            break;
          case 'delete':
            alert('Xóa thành công')
            break;
          default:
            return
        }
      }else{
        switch (this.props.notify.method) {
          case 'get':
            alert('Có lỗi vui lòng kiểm tra lại hoặc báo cáo quản trị viên')
            break;
          case 'post':
            alert('Thêm mới thất bại')
            break;
          case 'put':
            alert('Cập nhật thất bại')
            break;
          case 'delete':
            alert('Xóa thất bại')
            break;
          default:
            return
        }
      }

    }
  }

  handleLogout() {
    let loginRes = JSON.parse(COMMON_APP.getCookie(CONSTANTS._USER_LOGIN_))
    this.props.dispatch(fetchLogoutRequest({username: loginRes.user.username}))
  }

  setRedirect() {
    //window.history.push('/profile')
  }

  render() {

    // eslint-disable-next-line
    const {children, ...attributes} = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile/>
        <AppNavbarBrand
          full={{src: logo, width: 89, height: 25, alt: 'SEO'}}
          minimized={{src: sygnet, width: 30, height: 30, alt: 'SEO'}}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg"/>

        <Nav className="d-md-down-none" navbar>
          {/*<NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/users">Users</NavLink>
          </NavItem>*/}
          <NavItem className="px-3">
            <Link to="/deal/invoices">Bán hàng</Link>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          {/*<NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem>*/}
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              {this.props.loginRes.user.full_name}
              <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
            </DropdownToggle>
            <DropdownMenu right style={{right: 'auto'}}>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge
                color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem> <Link to="/profile"><i className="fa fa-user"></i> Profile</Link></DropdownItem>
              {/*<DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider/>
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>*/}
              <DropdownItem onClick={this.handleLogout.bind(this)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/*<AppAsideToggler className="d-md-down-none"/>*/}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

function mapStateToProps(state) {
  const loginRes = state.loginRes
  const notify = state.notify
  return {loginRes, notify}
}

export default connect(mapStateToProps)(DefaultHeader);
