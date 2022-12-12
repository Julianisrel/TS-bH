import styled from "styled-components";

const Container = styled.div`
  height: 300px;
  width: 100%;
  background: url("${({ image }) => image}") no-repeat center center/cover;
  color: white;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  > div {
    z-index: 2;
  }
`;

export { Container };
