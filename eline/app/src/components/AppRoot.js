import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import LoginForm from './LoginForm';
import {createTitle} from '../ducks/title';
import { apiLogout } from "../eline/ApiActions";

class AppRoot extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        createTitle: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.createTitle('User Management System');
    }

    render_forms() {
        if (this.props.user) {
            return (<a href='#' onClick={this.props.onLogout}>Logout</a>)
        } else {
            return (<LoginForm/>)
        }
    }

    render() {
        return (
            <section>
                <h1>{this.props.title}</h1>
                {this.render_forms()}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    title: state.title.title,
    user: state.role.user,
});

const mapDispatchToProps = dispatch => ({
    createTitle: title => dispatch(createTitle(title)),
    onLogout: () => dispatch(apiLogout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppRoot);
