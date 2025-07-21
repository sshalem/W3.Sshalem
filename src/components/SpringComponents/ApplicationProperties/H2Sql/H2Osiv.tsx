import { ApplicationPropertiesHighlight } from "../../../Highlight";

const H2Osiv = ({ idAnchor }: { idAnchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={idAnchor}>
      <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">OSIV</div>
      <div className="my-4">Regarding this property , see the project of LAZY Loading, I explain it there</div>
      <ApplicationPropertiesHighlight propertiesCode={osiv} />
    </article>
  );
};

export default H2Osiv;

const osiv = `# Disable OSIV
spring.jpa.open-in-view=false`;
