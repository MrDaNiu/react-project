import React from 'react';
import { Row, Input, Col, Select, Table, Button } from 'antd';
// import BreadcrumbCustom from '../BreadcrumbCustom';
import { TaskAllList } from '../../services/dispatch';
// import '../../style/dispatch.less';

const Option = Select.Option;
const columns = [
  {
    title: '运单号',
    dataIndex: 'orderSn',
    key: 'orderSn',
    align: 'center',
  },
  {
    title: '线路',
    dataIndex: 'startAddress',
    key: 'startAddress',
    align: 'center',
  },
  {
    title: '车长/车型',
    dataIndex: 'carLengthCn',
    key: 'carLengthCn',
    align: 'center',
  },
  {
    title: '调度人',
    dataIndex: 'admin_name',
    key: 'admin_name',
    align: 'center',
  },
  {
    title: '自营经纪人',
    dataIndex: 'driverName',
    key: 'driverName',
    align: 'center',
  },
  {
    title: '司机',
    dataIndex: 'driverMobile',
    key: 'driverMobile',
    align: 'center',
  },
  {
    title: '运单状态',
    dataIndex: 'orderStatusCn',
    key: 'orderStatusCn',
    align: 'center',
  },
];

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      params: {
        pageIndex: 1,
        pageSize: 10,
        total: 0,
      },
    };
  }

  locales = { emptyText: '暂无数据' };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ loading: true });
    let params = Object.assign({}, this.state.params);
    TaskAllList(params).then(response => {
      this.setState({
        dataSource: response.data,
        loading: false,
      });
    });
  };

  Reset = () => {};

  render() {
    return (
      <div className="gutter-example button-demo">
        {/*<BreadcrumbCustom first="调度中心" second="调度分配"/>*/}
        <Row gutter={20}>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="orderSn">运单号</label>
            <div className={'form-element'}>
              <Input id="orderSn" placeholder="请输入订单号" />
            </div>
          </Col>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="adminName">调度人</label>
            <div className={'form-element'}>
              <Input id="adminName" placeholder="请输入调度人" />
            </div>
          </Col>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="bind">绑定调度</label>
            <div className={'form-element'}>
              <Select id="bind" defaultValue="全部" style={{ width: '100%' }}>
                <Option value="">全部</Option>
                <Option value="1">已绑定调度</Option>
                <Option value="0">未绑定调度</Option>
              </Select>
            </div>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col className="row-glob search-row">
            <Button type="primary" loading={this.state.loading} onClick={this.getData.bind(this)}>
              查询
            </Button>
            <Button onClick={this.Reset.bind(this)}>重置</Button>
          </Col>
        </Row>
        <Row>
          <Table dataSource={this.state.dataSource} columns={columns} />
        </Row>
      </div>
    );
  }
}
