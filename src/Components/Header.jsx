import Button from "./Button";

const Header = () => {
  return (
    <header className="container">
      <p className="subtitle">Hi there, I'm</p>
      <h1>Marie Sarah Felton</h1>
      <p>
        Welcome to my small space on the web! I'm Marie, a front-end developer
        and UX designer that aspires to create breathtaking digital experiences.
        I graduated from Seneca College's Web Development in 2017, and from
        HackerYou's UX Design in 2018.
      </p>
      <p>
        I've also studied at Ryerson University for Cyber Security and Digital
        Forensics, along with Networking at Centennial College.
      </p>
      <Button title="Contact me" link="" />
    </header>
  );
};

export default Header;
