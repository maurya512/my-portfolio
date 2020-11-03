import React , { Component } from 'react';
export default class Contact extends Component {
    render() {
        let resumeData = this.props.resumeData;

        return(
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Let's connect for your next project!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eight columns footer-widgets">
                        <div className="widget">
                            <h4>Linked in:
                                {resumeData.linkedIn}
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}