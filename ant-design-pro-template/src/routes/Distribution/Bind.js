import React from 'react';
import { Row, Input, Col, Select, Table, Button } from 'antd';
// import { BindAdminList } from '../../services/dispatch';

const columns = [
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    align: 'center',
  },
  {
    title: '工作人员',
    dataIndex: 'orderSn',
    key: 'orderSn',
    align: 'center',
  },
  {
    title: '自营经纪人',
    dataIndex: 'line',
    key: 'line',
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
    // this.setState({ loading: true });
    // let params = Object.assign({}, this.state.params);
    // BindAdminList(params).then(response => {
    //   this.setState({
    //     dataSource: response.data,
    //     loading: false,
    //   });
    // });
  };

  AddConfig = () => {};

  render() {
    return (
      <div className="gutter-example button-demo">
        {/*<BreadcrumbCustom first="分配中心" second="绑定经纪人"/>*/}
        <Row gutter={20}>
          <Col>
            <span>配置中心</span>
            <Button type="primary" onClick={this.AddConfig.bind(this)}>
              新增
            </Button>
          </Col>
        </Row>
        <Row>
          <Table dataSource={this.state.dataSource} columns={columns} />
        </Row>
      </div>
    );
  }
}
