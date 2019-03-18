import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Detail from "./Detail";
import List from "./List";
import Form from "./Form";
import SendQuery from "./SendQuery";
import GetQuery from "./GetQuery";
import PageB from "./PageB";
import PageA from "./PageA";
import AsyncDataRedux from "./AsyncDataRedux";
import BigList from './BigList';

const Home = () => {
    return (
        <Router>
            <div>
                <p>home</p>
                <div>
                    <Link to="/about">about</Link>&nbsp;
                    <Link to="/list">List</Link>&nbsp;
                    <Link to="/detail">Detail</Link>&nbsp;
                    <Link to="/form">Form</Link>&nbsp;
                    <Link to="/sendquery">SendQuery</Link>&nbsp;
                    <Link to={{ pathname: "/getquery", search: "?name=zhy" }}>
                        发送参数
                    </Link>
                    <Link to="/pagea">PageA</Link>
                    <Link to="/pageb">PageB</Link>
                    <Link to="/asyncdataredux">AsyncDataRedux</Link>
                    <Link to="/bigDataList">bigDataList</Link>
                </div>
                <Route path="/about" component={About} />
                <Route path="/list" component={List} />
                <Route path="/detail" component={Detail} />
                <Route path="/form" component={Form} />
                <Route path="/sendquery" component={SendQuery} />
                <Route path="/getquery" component={GetQuery} />
                <Route path="/pagea" component={PageA} />
                <Route path="/pageb" component={PageB} />
                <Route path="/asyncdataredux" component={AsyncDataRedux} />
                <Route path="/bigDataList" component={BigList}/>
            </div>
        </Router>
    );
};

export default Home;
