import React, { Component } from 'react';
import Logo from './Logo'

class Nav extends Component {
	constructor(props){
		super(props);
		this.state={
			statusButton : true
		}
	}

	showButton = () => {
		if(this.state.statusButton){
			return <li><a href="" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal"><img src="images/login.png" alt /> Đăng nhập</a></li>
		} else{
			return <li className="dropdown">
					  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Nguyễn Văn Thưởng <span className="caret" /></a>
					  <ul className="dropdown-menu">
					    <li><a href="#">Cá nhân</a></li>
					    <li role="separator" className="divider" />
					    <li><a href="#">Đơn hàng</a></li>
					    <li role="separator" className="divider" />
					    <li><a href="#">Đăng xuất</a></li>
					  </ul>
				   </li>
		}
	}

	render() {
		return (
			<div className="row">
	          <div className="col-md-12">
	          	<nav id="fixNav">
			      <nav className="navbar navbar-default" role="navigation">
			        <div className="container-fluid">
			          {/* Brand and toggle get grouped for better mobile display */}
			          <div className="navbar-header">
			            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
			              <span className="sr-only">Toggle navigation</span>
			              <span className="icon-bar" />
			              <span className="icon-bar" />
			              <span className="icon-bar" />
			            </button>
			            <Logo/>
			          </div>
			          {/* Collect the nav links, forms, and other content for toggling */}
			          <div className="collapse navbar-collapse navbar-ex1-collapse">
			            <ul className="nav navbar-nav navbar-right">
			              <li><a href="cart"><img src="images/shopping-cart.png" alt=""/>	Giỏ hàng</a></li>
			              <li><a href="rules"><img src="images/list.png" alt />  Quy định</a></li>
						  {this.showButton() }
			            </ul>
			          </div>{/* /.navbar-collapse */}
			        </div>
			      </nav>
			      </nav>
	          </div>
	        </div>
		);
	}
}
export default Nav;