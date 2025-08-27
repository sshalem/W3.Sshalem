import { Answer, IMG, MainChildArea, Question } from "../../../../components";
import { DivDoubleBorder, SpanBlue, SpanGreen, SpanRed } from "../../../../components/Highlight";
import Li from "../../../../components/ui/Li";
import ULDecimal from "../../../../components/ui/ULDecimal";
import ULdisc from "../../../../components/ui/ULdisc";
import docker_1 from "../../../../assets/docker_1.jpg";

const O1_WhatIsDocker = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <Question>What is Docker?</Question>
      <Answer></Answer>
      👌 — Docker is a platform for <strong>developing</strong>, <strong>shipping</strong>, and <strong>running</strong> applications in
      <SpanGreen>containers</SpanGreen>. <br />
      <div>
        👌 — Docker solves <SpanGreen>several classic developer problems</SpanGreen> that have been around for decades. Here’s a breakdown: <br />{" "}
        <br />
      </div>
      <div>🔑 1. “It works on my machine” problem</div>
      <article className="ml-8">
        <ULdisc>
          <Li>
            <strong>The issue</strong>: An app works on a developer’s laptop but fails on a teammate’s laptop, a test server, or in production.
            (Because of Differences in OS, JDK versions, libraries, or system configuration.){" "}
          </Li>
          <Li>
            <strong>Docker solution</strong>: The app runs in a container with everything it needs (JDK, libs, configs) → always the same, no matter
            where you run it.
          </Li>
        </ULdisc>
      </article>
      <div>🔑 2. Dependency hell</div>
      <article className="ml-8">
        <ULdisc>
          <Li>
            <strong>The issue</strong>: Different projects need different versions of the same library or runtime (e.g., Java 8 vs Java 21, Python 2
            vs 3). Installing them all on one machine causes conflicts.
          </Li>
          <Li>
            <strong>Docker solution</strong>: Each app runs in its own isolated container with its own dependencies → no conflicts.
          </Li>
        </ULdisc>
      </article>
      <div>🔑 3. Environment setup pain</div>
      <article className="ml-8">
        <ULdisc>
          <Li>
            <strong>The issue</strong>: Setting up a dev/test environment can take hours (install DB, configure JDK, set up queues, etc.).
          </Li>
          <Li>
            <strong>Docker solution</strong>: You just run docker run ... or docker-compose up → instant, reproducible environment.
          </Li>
        </ULdisc>
      </article>
      <div>🔑 4. Portability across OS & infrastructure</div>
      <article className="ml-8">
        <ULdisc>
          <Li>
            <strong>The issue</strong>: An app may behave differently on Windows vs Linux, or local vs cloud servers.
          </Li>
          <Li>
            <strong>Docker solution</strong>: Containers are portable — run the same on any OS that supports Docker.
          </Li>
        </ULdisc>
      </article>
      <div>🔑 5. Scaling and resource efficiency</div>
      <article className="ml-8">
        <ULdisc>
          <Li>
            <strong>The issue</strong>: Virtual machines (VMs) are heavy, slow to start, and consume lots of resources.
          </Li>
          <Li>
            <strong>Docker solution</strong>: Containers are lightweight (share the host kernel) and start in seconds → efficient for microservices
            and cloud.
          </Li>
        </ULdisc>
      </article>
      <div>🔑 6. CI/CD & DevOps automation</div>
      <article className="ml-8">
        <ULdisc>
          <Li>
            <strong>The issue</strong>: Moving code from dev → test → prod often requires custom scripts and manual steps.
          </Li>
          <Li>
            <strong>Docker solution</strong>: The Docker image is the artifact. The same image is deployed everywhere, which simplifies CI/CD
            pipelines.
          </Li>
        </ULdisc>
      </article>
      ✅ In short:
      <div>Docker makes development, testing, and deployment faster, more consistent, and less painful by standardizing environments.</div>
      <section>
        <br />
        <br />
        <SpanBlue>Docker</SpanBlue> does not use your host's JDK — it downloads and uses the one I specify in the image. <br />
        That's why the app behaves the same across different machines and OSs. issues. ✅ That means no more{" "}
        <SpanRed>“but it worked on my machine”</SpanRed>.
        <br />
        <br /> The final Docker image includes:
        <ULDecimal>
          <Li>The JDK (from the base image).</Li>
          <Li>Spring Boot JAR.</Li>
          <Li>Any configuration (ports, entrypoint).</Li>
        </ULDecimal>
        So ,when I run the container:
        <ULdisc>
          <Li>👉 It doesn’t matter if your host machine has JDK 8, 21, or none at all. </Li>
          <Li>👉 The container always has JDK 21 inside.</Li>
          <Li>
            Meaning , when I<SpanBlue>dockerize</SpanBlue> Spring Boot app, the
            <SpanBlue>Docker image</SpanBlue> will include (download) the JDK version I specified. <br />
          </Li>
        </ULdisc>
      </section>
      <IMG img_name={docker_1}></IMG>
      <DivDoubleBorder>Core Concepts</DivDoubleBorder>
      <DivDoubleBorder>Dockerize Spring boot App</DivDoubleBorder>
      <section>
        When dockerize a Spring boot app:
        <ULDecimal>
          <Li>
            We write a <SpanGreen>Dockerfile</SpanGreen> - this describes how to build your app image:
            <ULdisc>
              <Li>Which base image to use (e.g. Java ).</Li>
              <Li>Which files to copy (your app code).</Li>
              <Li>What dependencies to install.</Li>
              <Li>What command to run when the container starts.</Li>
            </ULdisc>
          </Li>
          <Li>
            We build the image using docker build.
            <ULdisc>
              <Li>This produces an immutable "snapshot" of your app environment.</Li>
            </ULdisc>
          </Li>
          <Li>
            We run the <SpanGreen>image</SpanGreen> as a <SpanGreen>container</SpanGreen> with docker run.
            <ULdisc>
              <Li>Now your app is isolated but portable.</Li>
            </ULdisc>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_WhatIsDocker;
