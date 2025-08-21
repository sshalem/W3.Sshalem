const GitHubLiAnchor = ({ gitLink, description }: { gitLink: string; description: string }) => {
  return (
    <li>
      <a href={gitLink} target="_blank" className="hover:underline">
        {description}
      </a>
    </li>
  );
};

export default GitHubLiAnchor;
