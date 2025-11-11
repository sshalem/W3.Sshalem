/*
/spring/jpa/pagination-sorting#1.IntroPagniation
Intro Pagniation --> (SPRING)(JPA)(pagination sort)
*/
import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey, SpanRed, SpanTeal } from "../../../../../components/Highlight";

const O1_IntroPaginSort = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      JPA Pagination Sorting{" "}
      <Anchor
        description="JPA Pagination Sorting - Java Techie "
        href="https://www.youtube.com/watch?v=Wa0GQwWwzJE&list=PLVz2XdJiJQxxdOhu-xmEUYDzY_Pz8cRGa&index=6&ab_channel=JavaTechie"
      ></Anchor>
      <section className="my-8">
        <p className="text-2xl font-semibold"> 📦 The Concepts</p>
        <article className="my-8">
          <p className="inline-block rounded-md bg-black p-1 pr-2 text-lg font-semibold text-white">🧩 1. Pageable </p>
          <ULdisc>
            <Li>
              <SpanGrey>Pageable</SpanGrey> It’s an <strong>interface</strong> in Spring Data (
              <SpanGrey>org.springframework.data.domain.Pageable</SpanGrey>).
            </Li>
            <Li>We must pass a Pageable parameter to the repository method</Li>
            <Li>When you define a method in a Repository (like a JpaRepository), define Pageable as a parameter to get paged results.</Li>
            <Li>
              When you pass a <SpanGrey>Pageable</SpanGrey> to a <SpanGrey>repository</SpanGrey> method, you can get three main return types:
              <ULdisc>
                <Li>
                  <SpanGrey>Page{"<T>"}</SpanGrey> - A full paginated result including total count, total pages, current page, etc.{" "}
                  <JavaHighlight javaCode={PAGE}></JavaHighlight>
                </Li>
                <Li>
                  <SpanGrey>Slice{"<T>"}</SpanGrey> - includes info about next/previous page but not total count (better performance). ({" "}
                  <strong>A lightweight version of Page</strong> )<JavaHighlight javaCode={SLICE}></JavaHighlight>
                </Li>
                <Li>
                  <SpanGrey>List{"<T>"}</SpanGrey> - Just a list of items for the given page, without any pagination metadata.
                  <JavaHighlight javaCode={LIST}></JavaHighlight>
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
        {/*  */}
        {/*  */}
        {/*  */}
        <article className="my-16">
          <p className="inline-block rounded-md bg-black p-1 pr-2 text-lg font-semibold text-white">🧩 2. PageRequest </p>
          <ULdisc>
            <Li>
              <SpanGrey>PageRequest</SpanGrey> is a <strong>class</strong> in Spring Data that implements the <SpanGrey>Pageable</SpanGrey> interface.
            </Li>
            <Li>
              Then we <SpanRed>must</SpanRed> pass the <SpanGrey>Pageable object</SpanGrey> to <SpanGrey>Repository</SpanGrey> methods.
            </Li>
          </ULdisc>

          <div className="my-4">
            We need to config <SpanGrey>PageRequest</SpanGrey> class with 3 parameters:
          </div>
          <ULdisc>
            <Li>
              <SpanGrey>page</SpanGrey> - Zero-based page index ,
            </Li>
            <Li>
              <SpanGrey>size</SpanGrey> - Number of elements per page
            </Li>
            <Li>
              <SpanGrey>sort</SpanGrey> - <SpanTeal>(optional)</SpanTeal> Sort direction and property
            </Li>
          </ULdisc>
        </article>

        {/*  */}
        {/*  */}
        {/*  */}
        <article className="my-16">
          <p className="inline-block rounded-md bg-black p-1 pr-2 text-lg font-semibold text-white">🧩 3. Page {"<T>"} </p>

          <div className="my-4">When you pass a Pageable to a repository method, you can get three main return types:</div>
          <ULdisc>
            <Li>
              <SpanGrey>page</SpanGrey> - Zero-based page index ,
            </Li>
            <Li>
              <SpanGrey>size</SpanGrey> - Number of elements per page
            </Li>
            <Li>
              <SpanGrey>sort</SpanGrey> - <SpanTeal>(optional)</SpanTeal> Sort direction and property
            </Li>
          </ULdisc>
        </article>
        {/*  */}
        {/*  */}
        {/*  */}
      </section>
    </MainChildArea>
  );
};

export default O1_IntroPaginSort;

const PAGE = `Page<User> users = userRepository.findAll(pageable);`;
const SLICE = `Slice<User> users = userRepository.findByActive(true, pageable);`;
const LIST = `List<User> users = userRepository.findByRole("ADMIN", pageable);`;
