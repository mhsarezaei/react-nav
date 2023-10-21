  const [user,setUser] = useState({
      name : "",
      phone: "",
  })
console.log(user); // 2nd time!

const onSignUp = async () => {
    console.log(user);
};

const Login = async () => {
    return null
};
