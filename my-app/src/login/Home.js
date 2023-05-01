import { useEffect, useState } from "react";
// import { Card } from "react-bootstrap";

const Home = () => {
  const [alerts, setAlerts] = useState(true);
  useEffect(() => {
    let a = setTimeout(() => {
      setAlerts(false);
    }, 5000);
    console.log("setTimeout");
    return () => {
      //여기 코드는 useEffect 동작하기전에  실행됨
      console.log("clearTimeout");
      clearTimeout(a);
    };
  }, []); //[] 처음 마운트 될때 1회만 동작
  return (
    <div>
      {alerts === true ? (
        <div className="alert alert-primary  ">환영합니다.</div>
      ) : null}
    </div>
  );
};

export default Home;
