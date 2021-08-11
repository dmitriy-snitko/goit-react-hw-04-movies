import Loader from 'react-loader-spinner';
import s from './Spiner.module.css';

export const Spiner = () => {
  return (
    <div className={s.loaderContainer}>
      <Loader
        type="Oval"
        color="#3f51b5"
        height={150}
        width={150}
        timeout={3000}
      />
    </div>
  );
};
