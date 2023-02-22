import { v4 as uuidv4 } from "uuid";
import { Form, Input, Button, Typography, Checkbox, Alert } from "antd";
import Layout from "antd/es/layout";
import styled from "styled-components";

import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { DeleteOutlined } from "@ant-design/icons";
const { Title } = Typography;

const todoData = {
  data: [
    {
      id: uuidv4(),
      content: "Học reactJS",
      completed: true,
    },
    {
      id: uuidv4(),
      content: "Học mobX",
      completed: false,
    },
  ],
};
const Home = () => {
  const [form] = Form.useForm();

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onFinish = (values: any) => {
    console.log("Công việc: ", values);
  };

  return (
    <Layout className="home-page">
      <Title>TODO APP</Title>
      <LayoutTodoInput>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="Công việc" rules={[{ required: true }]}>
            <Input placeholder="Nhập công việc..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm
            </Button>
          </Form.Item>
        </Form>
      </LayoutTodoInput>
      <LayoutTodoList>
        <Title level={3}>Danh sách công việc</Title>
        {todoData?.data.map((todo) => (
          <div className="item-todo" key={todo.id}>
            <Checkbox onChange={onChange} />
            {todo.completed ? (
              <Alert message="✔️" type="success" />
            ) : (
              <Alert message="❌" type="warning" />
            )}

            <p>{todo.content}</p>
            <Button>
              <DeleteOutlined />
            </Button>
          </div>
        ))}
      </LayoutTodoList>
    </Layout>
  );
};

export default Home;
const LayoutTodoInput = styled(Layout)`
  width: 100%;
  margin: 0 auto;
  background: #fff;
  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .ant-form-item:nth-child(1) {
      width: 50vw;
    }
    button {
      margin-left: 1rem;
      width: 12rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    form {
      flex-direction: column;
      .ant-form-item:nth-child(1) {
        width: 90%;
        margin: 0 auto 1rem auto;
      }
    }
    button {
      margin: 0 auto;
    }
  }
`;
const LayoutTodoList = styled(Layout)`
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
  border: solid 1px #ccc;
  border-radius: 2px;
  h3 {
    text-align: left;
    padding: 0 1rem 1rem 1rem;
    border-bottom: solid 1px #ccc;
  }
  .item-todo {
    width: 100%;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    label {
      margin: 0 1rem;
    }
    p {
      width: 90%;
      text-align: left;
      padding-left: 1rem;
    }
    button {
      margin-right: 1rem;
    }
  }
  @media only screen and (max-width: 1024px) {
    width: 90%;
    .item-todo {
      button {
        margin-right: 1rem;
      }
    }
  }
`;
