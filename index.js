// import React from 'react';

class WeatherDetail extends React.Component {
    render() {
      return (
        <div style={{ backgroundColor: '#331C71' }}>
          <div style={{ padding: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ height: '40px', width: '40px', backgroundColor: '#5842A9', borderRadius: '12px' }}>
                <img src="assets/icons/menu1.png" alt="" style={{ color: 'white' }} />
              </div>
              <span style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>7 days</span>
              <div style={{ height: '40px', width: '40px', backgroundColor: '#5842A9', borderRadius: '12px' }}>
                <img src="assets/icons/dots.png" alt="" style={{ color: 'white' }} />
              </div>
            </div>
            <div style={{ height: '20px' }}></div>
            <div style={{ height: '320px', width: '320px', backgroundColor: '#5842A9', borderRadius: '20px' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ padding: '8px' }}>
                  <img src="assets/icons/cloudy(1).png" alt="" style={{ height: '150px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: 'white' }}>Tomorrow</span>
                  <div style={{ height: '15px' }}></div>
                  <span style={{ fontSize: '18px', color: 'white' }}>Mostly cloudy</span>
                </div>
              </div>
              <div style={{ position: 'relative', top: '120px', left: '70px' }}>
                <span style={{ color: 'white', fontSize: '70px', fontWeight: 'bold' }}>19°</span>
              </div>
              <div style={{ position: 'relative', top: '140px', left: '140px' }}>
                <span style={{ color: 'white', fontSize: '30px', fontWeight: 'bold' }}>/15</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ padding: '22px 13px' }}>
                <img src="assets/icon/protection.png" alt="" style={{ height: '30px' }} />
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>30°</span>
                <span style={{ fontSize: '16px', color: 'white' }}>Precipitation</span>
              </div>
              <div style={{ padding: '22px 13px' }}>
                <img src="assets/icon/drop.png" alt="" style={{ height: '30px' }} />
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>20°</span>
                <span style={{ fontSize: '16px', color: 'white' }}>Humidity</span>
              </div>
              <div style={{ padding: '22px 13px' }}>
                <img src="assets/icon/wind.png" alt="" style={{ height: '30px' }} />
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>9km/h</span>
                <span style={{ fontSize: '16px', color: 'white' }}>Wind speed</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default WeatherDetail;
  