import React from 'react';
import { Row } from 'antd';
// import BreadcrumbCustom from '../BreadcrumbCustom';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="gutter-example button-demo">
        {/*<BreadcrumbCustom first="分配中心" second="报价分配规则"/>*/}
        <Row gutter={10}>quote</Row>
      </div>
    );
  }
}
