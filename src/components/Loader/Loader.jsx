import { BallTriangle } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return <Wrapper>
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </Wrapper>;
};

export default Loader;
