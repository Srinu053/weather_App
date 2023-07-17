import React from 'react';

import React from './index';

const api={
    key:'67fbc5db79b0415bff39d12646e3dabe',
    base:'https://home.openweathermap.org/api_keys',
}

class MainScreen extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#5842A9' }}>
        <div style={{ padding: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ height: '40px', width: '40px', backgroundColor: '#331C71', borderRadius: '12px' }}>
              <img src="assets/icons/menu1.png" alt="" style={{ color: 'white' }} />
            </div>
            <span style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>sydney</span>
            <div style={{ height: '40px', width: '40px', backgroundColor: '#331C71', borderRadius: '12px' }}>
              <Icon icon="refresh" color="white" />
            </div>
          </div>
          <div style={{ height: '20px' }}></div>
          <div>
            <span style={{ color: 'white' }}>Mostly sunny</span>
            <div>
              <span style={{ fontSize: '150px', color: 'white', fontWeight: 'bold' }}>23°</span>
              <div style={{ opacity: '0.7', padding: '60px 0 0 60px' }}>
                <img src="assets/icon/cloudy.png" alt="" style={{ height: '150px' }} />
              </div>
            </div>
            <span style={{ color: 'white' }}>Saturday, 10 February | 10.00AM</span>
          </div>
          <div style={{ height: '20px' }}></div>
          <div style={{ height: '120px', width: '350px', backgroundColor: '#331C71', borderRadius: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ padding: '18px 8px' }}>
                <img src="assets/icon/protection.png" alt="" style={{ height: '40px' }} />
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>30°</span>
                <span style={{ fontSize: '16px', color: 'white' }}>Precipitation</span>
              </div>
              <div style={{ padding: '18px 8px' }}>
                <img src="assets/icon/drop.png" alt="" style={{ height: '40px' }} />
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>20°</span>
                <span style={{ fontSize: '16px', color: 'white' }}>Humidity</span>
              </div>
              <div style={{ padding: '18px 8px' }}>
                <img src="assets/icon/wind.png" alt="" style={{ height: '40px' }} />
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>9km/h</span>
                <span style={{ fontSize: '16px', color: 'white' }}>Wind speed</span>
              </div>
            </div>
          </div>
          <div style={{ height: '20px' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Today</span>
            <span style={{ color: 'white', fontSize: '17px' }}>7-day forecasts</span>
          </div>
          <div style={{ height: '20px' }}></div>
          <div style={{ display: 'flex' }}>
            <div style={{ height: '120px', width: '70px', backgroundColor: '#331C71', borderRadius: '19px', padding: '18px 8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>10 AM</span>
                <img src="assets/icon/cloud.png" alt="" style={{ height: '40px' }} />
                <span style={{ color: 'white' }}>23°</span>
              </div>
            </div>
            <div style={{ width: '30px' }}></div>
            <div style={{ height: '120px', width: '70px', backgroundColor: '#331C71', borderRadius: '19px', padding: '18px 8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>11 AM</span>
                <img src="assets/icon/cloudy(1).png" alt="" style={{ height: '40px' }} />
                <span style={{ color: 'white' }}>20°</span>
              </div>
            </div>
            <div style={{ width: '30px' }}></div>
            <div style={{ height: '120px', width: '70px', backgroundColor: '#331C71', borderRadius: '19px', padding: '18px 8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>12 PM</span>
                <img src="assets/icon/cloudy(2).png" alt="" style={{ height: '40px' }} />
                <span style={{ color: 'white' }}>19°</span>
              </div>
            </div>
            <div style={{ width: '30px' }}></div>
            <div style={{ height: '120px', width: '70px', backgroundColor: '#331C71', borderRadius: '19px', padding: '18px 8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>1 PM</span>
                <img src="assets/icon/cloudy(3).png" alt="" style={{ height: '40px' }} />
                <span style={{ color: 'white' }}>15°</span>
              </div>
            </div>
            <div style={{ width: '30px' }}></div>
            <div style={{ height: '120px', width: '70px', backgroundColor: '#331C71', borderRadius: '19px', padding: '18px 8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>2 PM</span>
                <img src="assets/icon/cloudy(4).png" alt="" style={{ height: '40px' }} />
                <span style={{ color: 'white' }}>18°</span>
              </div>
            </div>
          </div>
          <div style={{ height: '10px' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 'bold', color: 'white', fontSize: '17px' }}>Other cities</span>
            <span style={{ color: 'white', fontSize: '17px' }}>+</span>
          </div>
          <div>
            <div style={{ height: '70px', width: '250px', backgroundColor: '#331C71', borderRadius: '19px', padding: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src="assets/icon/cloud.png" alt="" style={{ height: '40px' }} />
                <div style={{ paddingTop: '18px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>Newzealand</span>
                  <span style={{ fontSize: '16px', color: 'white' }}>snowy</span>
                </div>
                <span style={{ fontSize: '30px', color: 'white' }}>9°</span>
              </div>
            </div>
            <div style={{ width: '10px' }}></div>
            <div style={{ height: '70px', width: '250px', backgroundColor: '#331C71', borderRadius: '19px', padding: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src="assets/icon/raining.png" alt="" style={{ height: '40px' }} />
                <div style={{ paddingTop: '18px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>Newzealand</span>
                  <span style={{ fontSize: '16px', color: 'white' }}>snowy</span>
                </div>
                <span style={{ fontSize: '30px', color: 'white' }}>9°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainScreen;
