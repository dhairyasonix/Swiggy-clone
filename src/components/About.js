import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <h3>this is a food ordring company</h3>
      {/* <User name="dhairya" location="gandhichowk"/> */}
      <UserClass name="dhairya" location="gandhichowk" />
    </div>
  );
};

export default About;
