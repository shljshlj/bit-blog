import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

class Header extends Component {
    state = {
        prevScrollpos: window.pageYOffset,
        visible: true
    }

    componentDidMount() {
        window.addEventListener('scroll', _.throttle((this.handleScroll), 160));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', _.throttle((this.handleScroll), 160));
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    }


    render() {
        const { visible } = this.state;

        return (
            <header className={visible ? 'header' : 'header header--hidden'}>
                <div className='container flex-row'>
                    <Link to='/'><h1>BLOG</h1></Link>
                    <HeaderMenu />
                </div>
            </header>
        );
    }
}

export { Header }