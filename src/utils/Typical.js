import Typical from 'react-typical';

const TypicalComponent = () => {
  return (
    <Typical
      steps={[
        'JavaScript Developer!',
        4000,
        'React Developer!',
        4000,
        'Self Learner!',
        2000,
        'Front-end Developer!',
        4000,
      ]}
      loop={Infinity}
      className="text-3xl sm:text-xl font-bold sm:text-center md:text-left"
    />
  );
};

export default TypicalComponent;
