import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import hero from "../assets/hero_image.png";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Hero = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(${hero});
  height: 100vh;
  width: 100vw;
  background-size: cover;
`;

const Header = styled.header`
  width: 80%;
  margin: auto;
`;

const Logo = styled.img`
  height: 2.5rem;
  margin: 2rem 0;
  display: block;
`;

const Form = styled.form`
  width: 450px;
  padding: 3rem 4rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
`;

const Input = styled.input`
  padding: 1.2rem;
  border-radius: 0.5rem;
  border: 0;
  font-size: 1rem;
`;

const Button = styled.button`
  background: red;
  &:disabled {
    background: gray;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

function SignUp(props) {
  const { setUser } = props;
  //hooks
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      validateEmail(formData.email) &&
      validateStrongPassword(formData.password)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  //helpers

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateStrongPassword = (password) => {
    let regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    return regex.test(password);
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        setUser(response.data);
        history.push("/welcome");
      })
      .catch((error) => console.log(error.message));
  }

  function handleChange(event) {
    const { name, value } = event.target; //event.target tetiklenen input'u verir. bana name ve value'su lazım.
    const newFormData = { ...formData, [name]: value }; //yeni state'imi oluşturdum.
    setFormData(newFormData); //state'imi güncelledim.

    if (name === "email") {
      if (validateEmail(value)) {
        setErrors({ ...errors, email: "" });
      } else {
        setErrors({ ...errors, email: "Geçerli bir email adresi giriniz!" });
      }
    }

    if (name === "password") {
      if (validateStrongPassword(value)) {
        setErrors({ ...errors, password: "" });
      } else {
        setErrors({ ...errors, password: "Strong bir password giriniz!" });
      }
    }
  }

  //template
  return (
    <Hero>
      <Header>
        <Logo src={logo} />
      </Header>
      <Form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <Input
          name="email"
          placeholder="Email or phone number"
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Input name="password" placeholder="Password" onChange={handleChange} />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        <Button disabled={!isValid}>Sign In</Button>
      </Form>
    </Hero>
  );
}

export default SignUp;
