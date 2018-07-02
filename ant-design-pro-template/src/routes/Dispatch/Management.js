import React from 'react';
import { Row, Input, Col, Select, Table, Button } from 'antd';
// import BreadcrumbCustom from '../BreadcrumbCustom';
import { ManageList } from '../../services/dispatch';
// import '../../style/dispatch.less';

const Option = Select.Option;
const columns = [
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    align: 'center',
  },
  {
    title: '运单号',
    dataIndex: 'orderSn',
    key: 'orderSn',
    align: 'center',
  },
  {
    title: '线路',
    dataIndex: 'line',
    key: 'line',
    align: 'center',
  },
  {
    title: '车长/车型',
    dataIndex: 'carLength',
    key: 'carLength',
    align: 'center',
  },
  {
    title: '调度人',
    dataIndex: 'customerName',
    key: 'customerName',
    align: 'center',
  },
  {
    title: '司机',
    dataIndex: 'driverName',
    key: 'driverName',
    align: 'center',
  },
  {
    title: '运单状态',
    dataIndex: 'orderStatusCn',
    key: 'orderStatusCn',
    align: 'center',
  },
  {
    title: '定位状态',
    dataIndex: 'locationStatus',
    key: 'locationStatus',
    align: 'center',
  },
  {
    title: '司机运费',
    dataIndex: 'driverFee',
    key: 'driverFee',
    align: 'center',
  },
  {
    title: '司机押金',
    dataIndex: 'driverDeposit',
    key: 'driverDeposit',
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
    ManageList(params).then(response => {
      this.setState({
        dataSource: response.data.list,
        loading: false,
      });
    });
  };

  Reset = () => {};

  render() {
    return (
      <div className="gutter-example button-demo">
        {/*<BreadcrumbCustom first='调度中心' second='调度管理'/>*/}
        <Row gutter={20}>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="orderSn">运单号</label>
            <div className={'form-element'}>
              <Input id="orderSn" placeholder="请输入订单号" />
            </div>
          </Col>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="customerName">货主姓名</label>
            <div className={'form-element'}>
              <Input id="customerName" placeholder="请输入货主姓名" />
            </div>
          </Col>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="orderStatus">运单状态</label>
            <div className={'form-element'}>
              <Select id="orderStatus" defaultValue="请选择" style={{ width: '100%' }}>
                <Option value="">请选择</Option>
                <Option value="0">已取消</Option>
                <Option value="11">已安排司机</Option>
                <Option value="12">经纪人确认发车</Option>
                <Option value="13">待签收</Option>
                <Option value="15">已到达</Option>
              </Select>
            </div>
          </Col>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="customerMobile">货主电话</label>
            <div className={'form-element'}>
              <Input id="customerMobile" placeholder="请输入货主电话" />
            </div>
          </Col>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="driverName">司机姓名</label>
            <div className={'form-element'}>
              <Input id="driverName" placeholder="请输入司机姓名" />
            </div>
          </Col>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="driverMobile">司机电话</label>
            <div className={'form-element'}>
              <Input id="driverMobile" placeholder="请输入司机电话" />
            </div>
          </Col>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="adminId">调度人</label>
            <div className={'form-element'}>
              <Input id="adminId" placeholder="请输入调度人" />
            </div>
          </Col>
          <Col className="row-glob search-row" lg={8} sm={12} xs={24}>
            <label htmlFor="orderConfirmStatus">运单确认无误</label>
            <div className={'form-element'}>
              <Select id="orderConfirmStatus" defaultValue="全部" style={{ width: '100%' }}>
                <Option value="">全部</Option>
                <Option value="1">已确认</Option>
                <Option value="0">待确认</Option>
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
