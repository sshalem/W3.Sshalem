import { ApplicationPropertiesHighlight, Span } from "../../../Highlight";

const H2Osiv = ({ idAnchor }: { idAnchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={idAnchor}>
      <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">OSIV</div>
      <div className="my-4">
        Regarding this property , see the project of LAZY Loading, (I explain it there). <br />I get a warning in spring console since by default its
        set to
        <Span>true</Span> . <br /> To disable the warning, I set to <Span>false</Span>
      </div>

      <ApplicationPropertiesHighlight propertiesCode={osiv} />
    </article>
  );
};

export default H2Osiv;

const osiv = `# Disable OSIV
spring.jpa.open-in-view=false`;
