import Button from "./buttons/ButtonHeader";

export default function Header() {
  const handleButtonClickHome = () => {
    window.location.href = "/home";
  };
  const handleButtonClickAbout = () => {
    window.location.href = "/about";
  };

  return (
    <>
      <Button onClick={handleButtonClickHome}>Home</Button>
      <Button onClick={handleButtonClickAbout}>About</Button>
    </>
  );
}
