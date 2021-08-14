import React, { Component } from 'react';

class RectangleGoogleAds extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins className="adsbygoogle"
                style={{display:"block"}}
                data-ad-client="ca-pub-2406698245010515"
                data-ad-slot={this.props.slot}
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>

        );
    }
}

export default RectangleGoogleAds;