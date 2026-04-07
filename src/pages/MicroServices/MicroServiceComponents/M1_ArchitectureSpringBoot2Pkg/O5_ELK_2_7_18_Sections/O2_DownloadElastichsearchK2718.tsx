import { Li, MainChildArea, ULdisc } from "../../../../../components";

const O2_DownloadElastichsearchK2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-8 text-xl">🧩 Download Elastichsearch</p>
          <ULdisc>
            <Li>
              tutorial link{" "}
              <a href="https://www.youtube.com/watch?v=n2HHAvpn6Jo" target="_blank" className="tracking-wide text-blue-500">
                https://www.youtube.com/watch?v=n2HHAvpn6Jo
              </a>
            </Li>
            <Li>
              <strong>Option 1 : </strong>go to{" "}
              <a href="https://www.elastic.co" target="_blank" className="tracking-wide text-blue-500">
                https://www.elastic.co
              </a>{" "}
              &nbsp; choose <strong>Resources</strong> tab ➡️ then <strong>Downloads</strong> box ➡️ scroll to Elastichsearch and download
            </Li>

            <Li>
              <strong>Option 2: </strong> direct link to download Elastichsearch (490MB){" "}
              <a href="https://www.elastic.co/downloads/elasticsearch" target="_blank" className="tracking-wide text-blue-500">
                https://www.elastic.co/downloads/elasticsearch
              </a>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_DownloadElastichsearchK2718;
