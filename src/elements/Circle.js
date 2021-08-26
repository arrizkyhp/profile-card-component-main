import CircleTop from 'assets/images/bg-pattern-top.svg'
import CircleBottom from 'assets/images/bg-pattern-bottom.svg'

const Circle = () => {
    return (
      <div className="circle">

          <img className="circle__1" src={CircleTop} alt="circle1" />
          <img className="circle__2" src={CircleBottom} alt="circle2" />

      </div>
    );
}

export default Circle;
