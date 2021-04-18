import React from 'react';

class HederBanner extends React.Component {
    render() {
        return (
            <div className="col-xs-12" style={{ marginBottom: '30px' }}>
                <div className="col-sm-8">
                    <h1><span>E</span>-SHOPPER</h1>
                    <h2>Free E-Commerce Template</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
                </div>
                <div className="col-sm-4">
                    <div style={{ overflow: 'hidden' }}>
                        <img src="assets/images/home/girl1.jpg" style={{ maxHeight: '220px', 'margin': '0 auto' }} className="girl img-responsive" alt="" />
                        <img src="assets/images/home/pricing.png" className="pricing" alt="" style={{ maxHeight: '100px' }} />
                    </div>
                </div>
            </div>
        )
    }
}
export default HederBanner;