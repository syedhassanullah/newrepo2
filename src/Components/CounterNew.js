import React from 'react';
import { Row, Col, Statistic } from 'antd';
import CountUp from 'react-countup';

const CounterNew = () => {
  return (
    <div style={{ padding: '20px' }}>   
      <Row gutter={16}>
        {/* Happy Clients */}
        <Col span={8}>
          <Statistic
            title="Happy Clients"
            value={500}
            formatter={(value) => <CountUp end={value} separator="," />}
          />
        </Col>

        {/* Projects */}
        <Col span={8}>
          <Statistic
            title="Projects"
            value={120}
            formatter={(value) => <CountUp end={value} separator="," />}
          />
        </Col>

        {/* Views */}
        <Col span={8}>
          <Statistic
            title="Views"
            value={10000}
            formatter={(value) => <CountUp end={value} separator="," />}
          />
        </Col>
      </Row>
    </div>
  );
};

export default CounterNew;
