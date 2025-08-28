import { Answer, IMG, MainChildArea, Question } from "../../../../components";
import { DivDoubleBorder, SpanGreen, SpanRed, SpanSky } from "../../../../components/Highlight";
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
      <div className="my-1 ml-8">
        Docker makes development, testing, and deployment faster, more consistent, and less painful by standardizing environments.
      </div>
      <section>
        <br />
        <br />
        <SpanSky>Docker</SpanSky> does not use your host's JDK — it downloads and uses the one I specify in the image. <br />
        That's why the app behaves the same across different machines and OSs. issues. ✅ That means no more{" "}
        <SpanRed>“but it worked on my machine”</SpanRed>.
        <br />
        <br />
        So ,when I run the container:
        <ULdisc>
          <Li>👉 It doesn’t matter if your host machine has JDK 8, 21, or none at all. </Li>
          <Li>👉 The container always has JDK 21 inside.</Li>
          <Li>
            Meaning , when I<SpanSky>dockerize</SpanSky> Spring Boot app, the
            <SpanSky>Docker image</SpanSky> will include (download) the JDK version I specified. <br />
          </Li>
        </ULdisc>
      </section>
      <DivDoubleBorder>Docker core concepts</DivDoubleBorder>
      <IMG img_name={docker_1}></IMG>
      <section>
        When saying dockerize a Spring boot app we mean we doing the following things.
        <ULDecimal>
          <Li>
            <SpanGreen>Docker File</SpanGreen>
            <div className="my-4 ml-8">
              <SpanSky>Docker file</SpanSky> is a text file that contains a set of instructions for building a <SpanSky>Docker image</SpanSky>. We
              write a <SpanGreen>Dockerfile</SpanGreen> that describes how to build your app image:
              <ULdisc>
                <Li>what operating system to start from.</Li>
                <Li>what software packages to install.</Li>
                <Li>what files to copy in.</Li>
                <Li>and what command to run when the container starts.</Li>
              </ULdisc>
            </div>
          </Li>
          <Li>
            <SpanGreen>Docker Image</SpanGreen>
            <div className="my-4 ml-8">
              <SpanSky>Docker Image</SpanSky> defines everything my application needs to run inside a container. <br />
              Think of it like a class definition in programming — it defines what the object (container) will look like.
              <ULdisc>
                <Li>A blueprint/template for creating containers.</Li>
                <Li>Built from a Dockerfile.</Li>
                <Li>Read-only (cannot be changed once built).</Li>
                <Li>Can be stored and shared (e.g., on Docker Hub).</Li>
              </ULdisc>
            </div>
          </Li>
          <Li>
            <SpanGreen>Docker Container</SpanGreen>
            <div className="my-4 ml-8">
              Think of it like an object created from a class — you can have many containers (objects) from one image (class).
              <ULdisc>
                <Li>A running instance of a Docker image.</Li>
                <Li>Writable layer on top of the image (so it can store logs, temp files, etc.).</Li>
                <Li>You can run multiple containers from the same image.</Li>
                <Li>Containers can start, stop, restart, and be deleted.</Li>
              </ULdisc>
            </div>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_WhatIsDocker;
