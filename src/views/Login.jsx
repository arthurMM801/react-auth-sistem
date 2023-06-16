import '../assets/css/login.css';
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/User';

const Login = () => {
  const { login } = useContext(AuthContext)
  const [formValues, setFormValues] = useState({ username: '', password: '' });


  // Atualiza o state do forms formsValues
  const handleFormsChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault(); // Evita o envio padrão do formulário (GET request)

    login(formValues.username, formValues.password);
  }


  return (
    <Row className='login_container'>
      <Card /* style={{width: 40+"%"}} */>
        <CardBody>
          <Row className='p-3'>
            <Col>
              <h3 className="mb-3 font-weight-normal">Sistema de authenticação</h3>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Row className='mb-2'>
                    <Input
                      name="username"
                      type="text"
                      placeholder='Username'
                      value={formValues.username}
                      onChange={handleFormsChange}
                    />
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row className='mb-2'>
                    <Input
                      name="password"
                      type="password"
                      placeholder='Senha'
                      value={formValues.password}
                      onChange={handleFormsChange}
                    />
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Button
                      id="button-login"
                      color='primary'
                      className="btn btn-lg btn-primary btn-block mb-0"
                      type="submit"
                    >Login</Button>
                  </Row>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Row>
  )
}

export default Login;