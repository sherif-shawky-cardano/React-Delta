import { Button, Form, Input, Select } from "antd";
const App = () => {
  function onSubmit(values) {
    alert(`Username: ${values.username}. Password: ${values.password}. Options: ${values.options}`);
  }

  return (
    <Form
      labelCol={{
        flex: "110px"
      }}
      labelAlign="left"
      labelWrap
      colon={false}
      style={{
        maxWidth: 600
      }}
      onFinish={onSubmit}
    >
      <Form.Item
        label="username"
        name="username"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Options" name="options">
        <Select>
          <Select.Option value="option-1">Option one</Select.Option>
          <Select.Option value="option-2">Option two</Select.Option>
          <Select.Option value="option-3">Option three</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
