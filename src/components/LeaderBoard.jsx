import { Component} from 'react';
import data from '../mocks/leaderboardMock';
import {Table, Tag, Space} from 'antd';

const { Column } = Table;

class LeaderBoard extends Component {
    render() {
        return (
            <Table dataSource={data} pagination={{defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}>
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column title="Tags" dataIndex="tags" key="tags"
                    render={tags => (
                        <>
                        {tags.map(tag => (
                            <Tag color="blue" key={tag}>
                            {tag}
                            </Tag>
                        ))}
                        </>
                    )}
                />
                <Column title="Action" key="action" render={(text, record) => (
                    <Space size="middle">
                        <a>Invite {record.lastName}</a>
                        <a>Delete</a>
                    </Space>
                )}
                />
            </Table>
        )
    } 
}

export default LeaderBoard;
