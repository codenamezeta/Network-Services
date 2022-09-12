import React, { Component } from 'react'

export default class BlogSidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="widget widget_search">
                    <form>
                        <input type="text" className="form-control" placeholder="Search here." />
                        <button type="submit"><i className="icofont-search"></i></button>
                    </form>
                </div>
                
                <div className="widget widget_categories">
                    <h3 className="widget-title">
                        Categories
                    </h3>

                    <ul>
                        <li><a href="#">AJAX</a></li>
                        <li><a href="#">Apache</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">PHP</a></li>
                        <li><a href="#">Django</a></li>
                        <li><a href="#">Error</a></li>
                        <li><a href="#">IIS</a></li>
                        <li><a href="#">JavaScript</a></li>
                    </ul>
                </div>
                
                <div className="widget widget_recent_entries">
                    <h3 className="widget-title">
                        Recent Posts
                    </h3>

                    <ul>
                        <li>
                            <a href="#">
                                <img src="/images/blog1.jpg" alt="image" />
                            </a>

                            <h5><a href="#">The Most Popular New top Business Apps</a></h5>
                            <p className="date">21 March, 2019</p>
                        </li>

                        <li>
                            <a href="#">
                                <img src="/images/blog2.jpg" alt="image" />
                            </a>

                            <h5><a href="#">3 WooCommerce Plugins to Boost Sales</a></h5>
                            <p className="date">20 March, 2019</p>
                        </li>

                        <li>
                            <a href="#">
                                <img src="/images/blog3.jpg" alt="image" />
                            </a>

                            <h5><a href="#">The Best Marketing top use Management Tools</a></h5>
                            <p className="date">27 March, 2019</p>
                        </li>

                        <li>
                            <a href="#">
                                <img src="/images/blog4.jpg" alt="image" />
                            </a>

                            <h5><a href="#">Top 21 Must-Read Blogs For Creative Agencies</a></h5>
                            <p className="date">27 January, 2019</p>
                        </li>
                    </ul>
                </div>
                
                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">
                        Tags
                    </h3>

                    <div className="tagcloud">
                        <a href="#">Error</a>
                        <a href="#">Cake Bake</a>
                        <a href="#">Dromzone</a>
                        <a href="#">File</a>
                        <a href="#">Yii</a>
                        <a href="#">Yii2</a>
                        <a href="#">UUID</a>
                        <a href="#">Setup</a>
                        <a href="#">Error</a>
                        <a href="#">Cake Bake</a>
                        <a href="#">Dromzone</a>
                        <a href="#">File</a>
                        <a href="#">Yii</a>
                        <a href="#">Yii2</a>
                        <a href="#">UUID</a>
                        <a href="#">Setup</a>
                    </div>
                </div>
                
                <div className="widget widget_archive">
                    <h3 className="widget-title">
                        Archives
                    </h3>

                    <ul>
                        <li><a href="#">December 2018</a></li>
                        <li><a href="#">January 2019</a></li>
                        <li><a href="#">February 2019</a></li>
                        <li><a href="#">March 2019</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
