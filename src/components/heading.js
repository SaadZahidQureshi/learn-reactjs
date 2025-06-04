import drawing from "../assets/drawing.webp";
import style from "../styles/heading.module.css";
import cn from 'classnames';

function Greetings({ name, isActive, hasError }) {

  return (
    <div className={`${style.div} `}>
      <h1>Hello, in the world of {name}.</h1>
      <p className={cn(style.p, style.red, {
        [style.active]: isActive,
        'error-text': hasError,
      })}>
        Welcome to the first component.
      </p>
      <img src={drawing} alt="Placeholder" />
    </div>
  );
}

export default Greetings;