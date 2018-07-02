import React from 'react';
import { Row, Input, Col, Select, Table, Button } from 'antd';
// import BreadcrumbCustom from '../BreadcrumbCustom';
import { ManageList } from '../../services/dispatch';
// import '../../style/dispatch.less';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="gutter-example button-demo">
        {/*<BreadcrumbCustom first="调度中心" second="待调度"/>*/}

        <Row>{/*<Table dataSource={this.state.dataSource} columns={columns}/>*/}</Row>
      </div>
    );
  }
}
