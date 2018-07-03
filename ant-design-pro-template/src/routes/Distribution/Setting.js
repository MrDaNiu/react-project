import React from 'react';
import { Row } from 'antd';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="gutter-example button-demo">
        {/*<BreadcrumbCustom first="分配中心" second="特殊经纪人设置"/>*/}
        <Row gutter={10}>setting</Row>
      </div>
    );
  }
}
