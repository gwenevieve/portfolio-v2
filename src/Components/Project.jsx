import Button from "./Button";

const Project = ({ title, desc }) => {
  return (
    <main class="container">
      <h3>{title}</h3>
      <p>{desc}</p>

      <Button title="Github link" />
      <Button title="Live link" />
    </main>
  );
};

export { Project };
