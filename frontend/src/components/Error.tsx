import classes from './Error.module.css';

interface ErrorProps {
  message?: string;
}

const Error = (props: ErrorProps) => {
  const { message = 'Something went wrong' } = props;

  return <div className={classes.error}>{message}</div>;
};

export default Error;
