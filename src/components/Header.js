import React, { useState, useEffect } from "react";
import ToggleTheme from "./Theme/ToggleTheme";
import { firebase } from "../firebase";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
const Header = () => {
  const [PopupNev, setPopupNev] = useState(false);
  const [login, setLogin] = useState(false);
  const [count, setCount] = useState(0);
  const [name, setName] = useState();
  const [imgUrl, setImgurl] = useState();
  const [number, setNumber] = useState();
  const loginfun = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((re) => {
        console.log(re);
        setName(re.user.displayName);
        setImgurl(re.user.photoURL);
        setNumber(re.user.phoneNumber);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    firebase.auth().signOut();
  };
  useEffect(() => {
    setCount(Math.floor(Math.random() * 9));
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      }
      setLogin(false);
    });
  }, []);
  return (
    <div className="bg-colors-components z-50 dark:bg-gray-800 sticky top-0">
      <Container className="m-auto">
        <div className="w-full py-3 flex justify-between items-center">
          <div
            className=""
            style={{ width: "fit-content", height: "fit-content" }}
          >
            <Link to="/" className="">
              <img
                className="w-full h-full"
                src="/img/programmingHeroIcon.png"
                alt="img"
              />
            </Link>
          </div>
          <>
            <ul className="flex sm:row-auto items-center m-0">
              <li className="text-gray-100 mx-1 px-3 cursor-pointer">
                <Link
                  className=" no-underline text-gray-100 hover:text-gray-50"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="text-gray-100 mx-1 px-3 cursor-pointer">
                <Link
                  to="/success"
                  className="text-gray-100 hover:text-gray-50 no-underline"
                >
                  Success
                </Link>
              </li>
              <li className="text-gray-100 mx-1 relative px-3 cursor-pointer">
                <img
                  height="22px"
                  width="22px"
                  src="/img/shoppingCart.png"
                  alt="icon"
                />
                <div className="Card-count-num">
                  <p className="m-0">{count}</p>
                </div>
              </li>
              <li className="relative">
                <div
                  className="cursor-pointer "
                  onClick={() => setPopupNev(!PopupNev)}
                >
                  <img src="/img/useravatar.png" alt="img" />
                </div>
                {PopupNev ? (
                  <>
                    {!login ? (
                      <div className="bg-indigo-100 flex flex-col items-center justify-center pt-4 dark:bg-gray-800 shadow-md rounded-sm absolute top-14 right-0">
                        <div className="w-10 h-10 object-cover overflow-hidden rounded-full">
                          <img
                            className="w-full h-full"
                            src={imgUrl}
                            alt={name}
                          />
                        </div>
                        <div>
                          <p className="p-2 text-gray-800 rounded-xl dark:text-gray-100">
                            {name}
                          </p>
                          <p className="p-2 text-gray-800 rounded-xl dark:text-gray-100">
                            {number}
                          </p>
                        </div>
                        <div className=" flex  p-3">
                          <button
                            onClick={() => loginfun()}
                            className="px-5 py-2 border-2 text-gray-100 rounded-full bg-blue-500 border-blue-500 mx-3"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-indigo-100 dark:bg-gray-800 shadow-md rounded-sm absolute top-14 right-0">
                        <div className=" flex  p-3">
                          <button
                            onClick={() => loginfun()}
                            className="px-5 py-2 button border-2 rounded-full bg-transparent dark:text-gray-100 border-blue-500 mx-3"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : undefined}
              </li>
              <li className="px-3">
                <ToggleTheme />
              </li>
            </ul>
          </>
        </div>
      </Container>
    </div>
  );
};

export default Header;
