import React from 'react';
import { Row, Input, Col, Select, Table, Button } from 'antd';
// import BreadcrumbCustom from '../BreadcrumbCustom';
import { DriverList } from '../../services/dispatch';
// import '../../style/dispatch.less';

const Option = Select.Option;
const columns = [
  {
    title: '操作',
    dataIndex: 'orderSn',
    key: 'orderSn',
    align: 'center',
  },
  {
    title: '运单号',
    dataIndex: 'orderSn',
    key: 'orderSn',
    align: 'center',
  },
  {
    title: '经纪人',
    dataIndex: 'agentName',
    key: 'line',
    align: 'center',
  },
  {
    title: '司机',
    dataIndex: 'driverName',
    key: 'driverName',
    align: 'center',
  },
  {
    title: '运费',
    dataIndex: 'driverFee',
    key: 'driverFee',
    align: 'center',
  },
  {
    title: '已付',
    dataIndex: 'paid',
    key: 'paid',
    align: 'center',
  },
  {
    title: '已收',
    dataIndex: 'receivedFee',
    key: 'receivedFee',
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
    DriverList(params).then(response => {
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
        {/*<BreadcrumbCustom first="调度中心" second="被更换司机列表"/>*/}
        <Row gutter={20}>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="orderSn">运单号</label>
            <div className={'form-element'}>
              <Input id="orderSn" placeholder="请输入订单号" />
            </div>
          </Col>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="customerName">经纪人</label>
            <div className={'form-element'}>
              <Input id="customerName" placeholder="请输入经纪人" />
            </div>
          </Col>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="driverMobile">司机电话</label>
            <div className={'form-element'}>
              <Input id="driverMobile" placeholder="请输入司机电话" />
            </div>
          </Col>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="driverName">司机姓名</label>
            <div className={'form-element'}>
              <Input id="driverName" placeholder="请输入司机姓名" />
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
